import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Actividad12Module } from './actividad12/actividad12.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Actividad12Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
