import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { SongFormComponent } from './song-form/song-form.component'; // Asegúrate de importar el componente

export const routes: Routes = [
  { path: 'albums', component: AlbumListComponent },
  { path: 'new-song/:albumId', component: SongFormComponent }, // Ruta para el formulario de canciones
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}