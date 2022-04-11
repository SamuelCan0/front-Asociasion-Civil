import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  public url:string;
  public headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) {
    this.url='https://mara-ac-server.herokuapp.com/api/';
  }

  getGallerys(): Observable<any>{
    return this.http.get(this.url+'gallerys',{headers:this.headers});
  }
}
