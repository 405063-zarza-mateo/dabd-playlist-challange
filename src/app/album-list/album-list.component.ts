import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent implements OnInit {/* 
playAlbum(arg0: number) {
throw new Error('Method not implemented.');
}
addSong(arg0: number) {
throw new Error('Method not implemented.');
}

  public albumList$!: Observable<Album[]>;
  constructor(private service: ServiceService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.albumList$ = this.service.getAlbums();
  }
   */
  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.http.get<any[]>('https://62ec30ee818ab252b6f9352d.mockapi.io/albums')
      .subscribe(data => {
        this.albums = data;
      });
  }

  playAlbum(albumId: string): void {
    this.router.navigate(['/player', albumId]);
  }

  addSong(albumId: string): void {
    this.router.navigate(['/new-song', albumId]);
  }
}
