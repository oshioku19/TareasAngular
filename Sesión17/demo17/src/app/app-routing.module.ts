import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { FiltradoPaisComponent } from './principal/filtrado-pais/filtrado-pais.component';

import { MensajeComponent } from './principal/mensaje/mensaje.component';


const routes: Routes = [
  {path: 'Contacto', component: ContactoComponent},
  {path: 'Mensaje', component: MensajeComponent},
  {path: 'Contacto/:nuevoFormulario', component: MensajeComponent},
  {path: 'Filtradopais/:nuevoFiltrado', component: FiltradoPaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
