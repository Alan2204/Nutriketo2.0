import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Clase que nos ayudara a almacenar los datos en la db de SQLite
export class ComentService {

  id: number;
  Usuario: string;
  Comentario: string;
}
