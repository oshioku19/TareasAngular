import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormsModule } from '@angular/forms';
import { RetoComponent } from './reto/reto.component';



@NgModule({
  declarations: [
    FormTemplateComponent,
    RetoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormTemplateComponent,
    RetoComponent
  ]
})
export class PrincipalModule { }
