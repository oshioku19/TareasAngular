import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './principal/editar/editar.component';
import { TablaComponent } from './principal/tabla/tabla.component';

const routes: Routes = [
  { path: 'tabla', component: TablaComponent },
  { path: 'editar', component: EditarComponent },
  { path: 'productos/:producto', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
