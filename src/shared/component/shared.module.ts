import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
