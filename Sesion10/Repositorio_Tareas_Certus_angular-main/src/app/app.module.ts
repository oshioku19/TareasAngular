import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modulo1Module } from './modulo1/modulo1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Modulo1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
