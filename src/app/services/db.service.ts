import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ComentService } from './coment.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject;
  ComentariosList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'positronx_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getComentarioData();
      });
    });
   }

   dbState() {
    return this.isDbReady.asObservable();
  }

  fetchComentarios(): Observable<ComentService[]> {
    return this.ComentariosList.asObservable();
  }

  getComentarioData() {
    this.httpClient.get(
      'assets/dump.sql', 
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getComentarios();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  getComentarios(){
    return this.storage.executeSql('SELECT * FROM TablaComentarios', []).then(res => {
      let items: ComentService[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            Usuario: res.rows.item(i).Usuario,  
            Comentario: res.rows.item(i).Comentario
           });
        }
      }
      this.ComentariosList.next(items);
    });
  }

  // Add
  addComentario(Usuario,Comentario) {
    let data = [Usuario, Comentario];
    return this.storage.executeSql('INSERT INTO TablaComentarios (Usuario, Comentario) VALUES (?, ?)', data)
    .then(res => {
      this.getComentarios();
    });
  }

  getComentario(id): Promise<ComentService> {
    return this.storage.executeSql('SELECT * FROM TablaComentarios WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
        Usuario: res.rows.item(0).Usuario,  
        Comentario: res.rows.item(0).Comentario
      }
    });
  }
}
