import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../app/models/album';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(`https://62ec30ee818ab252b6f9352d.mockapi.io/albums`)
  }
}
