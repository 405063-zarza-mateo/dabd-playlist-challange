import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { SongFormComponent } from './song-form/song-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbumListComponent, MusicPlayerComponent, SongFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playlist-challange';
}
