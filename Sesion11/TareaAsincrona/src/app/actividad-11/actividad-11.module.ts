import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioReactivoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormularioReactivoComponent
  ]
})
export class Actividad11Module { }
