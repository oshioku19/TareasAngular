import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';

import { LoginComponent } from './principal/login/login.component';
import { PostComponent } from './principal/post/post.component';


const routes: Routes = [
  {path: 'post', component: PostComponent, canActivate: [CanactivateGuard]},

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
