import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Actividad11Module } from './actividad-11/actividad-11.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Actividad11Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
