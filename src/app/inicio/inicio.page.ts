import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //La funcion del constructor es la de poner un delay para mostrar la pantalla de incio antes de redireccionar hacia el menu.

  constructor(public router:Router) { 
    setTimeout(() => {
      this.router.navigateByUrl('menu');
    },3800);
  }

  ngOnInit() {
  }

}
