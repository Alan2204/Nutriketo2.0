import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from '../../services/db.service';
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

@Component({
  selector: 'app-huevos-v',
  templateUrl: './huevos-v.page.html',
  styleUrls: ['./huevos-v.page.scss'],
})
export class HuevosVPage implements OnInit {

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
  
>>>>>>> ff25fbb3b24b32558d7fbc1affbfcadedcef7570

}
