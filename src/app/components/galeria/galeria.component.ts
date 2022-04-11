import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  public gallerys:Gallery[]=[];
  gallery=new Gallery("","","","",0);

  constructor(private gs: GalleryService) { }

  ngOnInit(): void {
    this.obtenerPhotos();
  }

  obtenerPhotos(){
    this.gs.getGallerys().subscribe((g:Gallery[])=>{
      this.gallerys=g;
    });
  }

}
