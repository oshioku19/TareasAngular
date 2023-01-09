import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    CabeceraComponent,
    ContenidoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CabeceraComponent,
    ContenidoComponent,
    NavbarComponent
  ]
})
export class NewModule { }
