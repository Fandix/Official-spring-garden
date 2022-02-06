import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoteAlbumComponent } from './route-pages/phote-album/phote-album.component';
import { HomeComponent } from '@route-page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'phote-album', component: PhoteAlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
