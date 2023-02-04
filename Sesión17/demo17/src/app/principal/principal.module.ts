import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { FiltradoPaisComponent } from './filtrado-pais/filtrado-pais.component';


@NgModule({
  declarations: [
    MenuComponent,
    ContactoComponent,
    MensajeComponent,
    FiltradoPaisComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    ContactoComponent,
    MensajeComponent,
    FiltradoPaisComponent,
  ]
})
export class PrincipalModule { }
