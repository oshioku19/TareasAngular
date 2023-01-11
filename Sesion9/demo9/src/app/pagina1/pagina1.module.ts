import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './directivas/directivas.component';



@NgModule({
  declarations: [
    DirectivasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DirectivasComponent
  ]
})
export class Pagina1Module { }
