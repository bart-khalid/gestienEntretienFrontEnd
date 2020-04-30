import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';

import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { MaterielComponent } from './components/materiel/materiel.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import {CheckboxModule} from 'primeng';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    VehiculeComponent,

    MaterielComponent,

    PrestationComponent,

    ReclamationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
