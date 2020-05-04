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
    AutoCompleteModule,
    CalendarModule, CheckboxModule, DialogModule,
    DropdownModule, FullCalendarModule,
    InputTextareaModule, MenuModule,
    MessageModule,
    MessageService, MultiSelectModule, PaginatorModule,
    PanelModule, SliderModule, TableModule,
    ToastModule, TooltipModule
} from 'primeng';

import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';

import {MaterielComponent} from './components/materiel/materiel.component';
import {PrestationComponent} from './components/prestation/prestation.component';
import {ReclamationComponent} from './components/reclamation/reclamation.component';
import {BonsComponent} from './components/bons/bons.component';
import {FournisseurSVComponent} from './components/fournisseur-sv/fournisseur-sv.component';
import {UsersComponent} from './components/users/users.component';



@NgModule({


  declarations: [
    AppComponent,

    LoginComponent,

    VehiculeComponent,

    BonsComponent,

    MaterielComponent,

    PrestationComponent,

    ReclamationComponent,

    VehiculeListComponent,

    FournisseurSVComponent,

    UsersComponent,

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
        TooltipModule,
        AutoCompleteModule,
        PaginatorModule,
        MenuModule,
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
