import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetoModule } from './reto/reto.module';
import { TareaAsincronaModule } from './tarea-asincrona/tarea-asincrona.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RetoModule,
    TareaAsincronaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
