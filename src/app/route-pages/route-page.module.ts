import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { PhoteAlbumComponent } from './phote-album/phote-album.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared-component/shared.module';
@NgModule({
  declarations: [
    PhoteAlbumComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class RoutePageModule { }
