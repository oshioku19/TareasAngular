import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    OperacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    OperacionesComponent
  ]
})
export class TareaModule { }
