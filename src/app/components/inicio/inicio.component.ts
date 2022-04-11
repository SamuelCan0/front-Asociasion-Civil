import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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
