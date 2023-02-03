import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ProductosComponent,
    NavComponent,
    MenuComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    NavComponent
  ]
})
export class ComponentsModule { }
