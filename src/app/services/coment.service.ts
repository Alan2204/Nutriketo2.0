import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  id: number;
  Usuario: string;
  Comentario: string;
}
