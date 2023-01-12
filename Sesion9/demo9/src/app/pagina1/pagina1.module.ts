import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormsModule } from '@angular/forms';
import { RetoComponent } from './reto/reto.component';



@NgModule({
  declarations: [
    DirectivasComponent,
    RetoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DirectivasComponent,
    RetoComponent
  ]
})
export class Pagina1Module { }
