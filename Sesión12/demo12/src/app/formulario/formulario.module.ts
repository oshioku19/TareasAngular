
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormListadoComponent } from './form-listado/form-listado.component';
import { ReactiveFormsModule } from '@angular/forms';

//CONFIGURAR ZONA GEORGRÁFICA
import { LOCALE_ID, NgModule } from '@angular/core';
import localesES from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localesES, 'es-PE')

@NgModule({
  declarations: [
    FormRegistroComponent,
    FormListadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormRegistroComponent,
    FormListadoComponent
  ],
  providers:[{provide: LOCALE_ID, useValue: 'es-PE'}]
})
export class FormularioModule { }
