import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioModule } from './formulario/formulario.module';
import { RetoModule } from './reto/reto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormularioModule,
    RetoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
