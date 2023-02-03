import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './principal/register/register.component';
import { LoginComponent } from './principal/login/login.component';
import { HomeComponent } from './principal/home/home.component';
import { CandeactivateGuard } from './candeactivate.guard';
const routes: Routes = [
  {path : 'login',component: LoginComponent},
  { path: 'home', component: HomeComponent },
  
  {path: 'register', component: RegisterComponent, canDeactivate: [CandeactivateGuard]},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
