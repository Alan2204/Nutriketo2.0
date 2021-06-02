import { Component } from '@angular/core';
import { Photo } from '../models/photo.interface';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})

export class GaleriaPage {
  public photos: Photo [] = [];
  constructor(private photoSvc: PhotoService) {}

  ngOninit(){
    this.photoSvc.loadSaved().then(() =>{
      this.photos = this.photoSvc.getPhotos();
    });
  }

  public newPhoto(): void {
    this.photoSvc.addNewtoaGallery();
  }


}
