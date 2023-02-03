import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import {FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponentePadreComponent,
    ComponenteHijoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ComponentePadreComponent,
    ComponenteHijoComponent
  ]
})
export class PrincipalModule { }
