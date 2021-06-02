import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from '../../services/db.service';


@Component({
  selector: 'app-tostadas',
  templateUrl: './tostadas.page.html',
  styleUrls: ['./tostadas.page.scss'],
})
export class TostadasPage implements OnInit {

  mainForm: FormGroup;
  Data: any[] = []

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchComentarios().subscribe(item => {
          this.Data = item
        })
      }
    });

    this.mainForm = this.formBuilder.group({
      Usuario: [''],
      Comentario: ['']
    })
  }

  storeData() {
    this.db.addComentario(
      this.mainForm.value.Usuario,
      this.mainForm.value.Comentario
    ).then((res) => {
      this.mainForm.reset();
    })
  }

}
