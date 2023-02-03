import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes =[
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'productos',
    component: ProductosComponent 
  },
  {
    path:'contacto',
    component: ContactoComponent 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
