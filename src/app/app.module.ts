import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClient, HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';

import { VehiculeComponent } from './components/vehicule/vehicule.component';
import {InputTextModule} from 'primeng/inputtext';
import {
  CalendarModule, CheckboxModule, DialogModule,
  DropdownModule, FullCalendarModule,
  InputTextareaModule,
  MessageModule,
  MessageService, MultiSelectModule,
  PanelModule, SliderModule, TableModule,
  ToastModule
} from 'primeng';
import { BonsComponent } from './components/bons/bons.component';
import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';
import { UsersComponent } from './components/users/users.component';
import { FournisseurSVComponent } from './components/fournisseur-sv/fournisseur-sv.component';



@NgModule({


  declarations: [
    AppComponent,

    LoginComponent,

    VehiculeComponent,

    BonsComponent,

    VehiculeListComponent,

    UsersComponent,


    FournisseurSVComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    ToastModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CalendarModule,
    FullCalendarModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    MultiSelectModule,
    SliderModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
