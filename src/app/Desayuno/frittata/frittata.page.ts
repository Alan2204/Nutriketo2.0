import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from '../../services/db.service';

>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

@Component({
  selector: 'app-frittata',
  templateUrl: './frittata.page.html',
  styleUrls: ['./frittata.page.scss'],
})
export class FrittataPage implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }
=======
  mainForm: FormGroup;
  Data: any[] = []

  constructor(

    private db: DbService,
    public formBuilder: FormBuilder
  ) { }
//Desde aqui se inicia un formulario para agregar los datos a la db
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
//Funcion para almacenar los datos en el momento en que se de click en el boton de comentar
  storeData() {
    this.db.addComentario(
      this.mainForm.value.Usuario,
      this.mainForm.value.Comentario
    ).then((res) => {
      this.mainForm.reset();
    })
  }

>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

}
