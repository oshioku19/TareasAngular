import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    Pagina1Component,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Pagina1Component,
    LoginComponent
  ]
})
export class DirectivasModule { }
