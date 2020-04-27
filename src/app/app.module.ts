import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClient, HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';

import { VehiculeComponent } from './components/vehicule/vehicule.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    VehiculeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule {

 }
