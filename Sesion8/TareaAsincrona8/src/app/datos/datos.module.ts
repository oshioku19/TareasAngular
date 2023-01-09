import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Componente1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Componente1Component
  ]
})
export class DatosModule { }
