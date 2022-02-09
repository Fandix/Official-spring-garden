import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { RouterModule } from '@angular/router';

import { PhoteAlbumComponent } from './phote-album/phote-album.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared-component/shared.module';
import { FrontPageComponent } from './home/front-page/front-page.component';
@NgModule({
  declarations: [
    PhoteAlbumComponent,
    HomeComponent,
    FrontPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule
  ]
})
export class RoutePageModule { }
