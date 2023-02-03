import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RegistroFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegistroFormComponent
  ]
})
export class PrincipalModule { }
