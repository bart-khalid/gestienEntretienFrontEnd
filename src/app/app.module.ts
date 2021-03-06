import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClient, HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';

import { UserinformationsComponent } from './components/userinformations/userinformations.component';
import {InputTextModule} from 'primeng/inputtext';
import {
  AccordionModule,
  AutoCompleteModule,
  CalendarModule, ChartModule, CheckboxModule, ConfirmationService, ConfirmDialogModule, DialogModule,
  DropdownModule, FullCalendarModule,
  InputTextareaModule, MenubarModule, MenuModule,
  MessageModule,
  MessageService, MultiSelectModule, PaginatorModule,
  PanelModule, ProgressSpinnerModule, SliderModule, TableModule, TabMenuModule,
  ToastModule, TooltipModule
} from 'primeng';

import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';

import {MaterielComponent} from './components/materiel/materiel.component';
import {PrestationComponent} from './components/prestation/prestation.component';
import {ReclamationComponent} from './components/reclamation/reclamation.component';
import {BonsComponent} from './components/bons/bons.component';
import {FournisseurSVComponent} from './components/fournisseur-sv/fournisseur-sv.component';
import {UsersComponent} from './components/users/users.component';
import { LocalComponent } from './components/local/local.component';
import { LocaldetailComponent } from './components/localdetail/localdetail.component';
import {ReclamerComponent} from './components/reclamer/reclamer.component';
import { ActionsComponent } from './components/actions/actions.component';
import {DatePipe} from '@angular/common';
import {PrestationInterneListeComponent} from './components/prestation-interne-liste/prestation-interne-liste.component';
import {PrestationExterneListeComponent} from './components/prestation-externe-liste/prestation-externe-liste.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import {BonrComponent} from './components/bonr/bonr.component';
import {BonvComponent} from './components/bonv/bonv.component';
import { AgentComponent } from './components/agent/agent.component';
import { EntretienComponent } from './components/entretien/entretien.component';
import { ToastrModule } from 'ngx-toastr';
import { PresBonCommandeComponent } from './components/pres-bon-commande/pres-bon-commande.component';
import { PresBonLivraisonComponent } from './components/pres-bon-livraison/pres-bon-livraison.component';





@NgModule({


  declarations: [
    AppComponent,

    LoginComponent,

    UserinformationsComponent,

    BonsComponent,

    MaterielComponent,

    PrestationComponent,

    ReclamationComponent,

    VehiculeListComponent,

    FournisseurSVComponent,

    UsersComponent,

    LocalComponent,

    LocaldetailComponent,

    ReclamerComponent,

    ActionsComponent,

    PrestationInterneListeComponent,

    PrestationExterneListeComponent,

    DocumentationComponent,

    BonrComponent,

    BonvComponent,

    AgentComponent,

    EntretienComponent,

    PresBonCommandeComponent,

    PresBonLivraisonComponent,

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
    TabMenuModule,
    MenubarModule,
    AccordionModule,
    ChartModule,
    ToastrModule.forRoot(),
    ProgressSpinnerModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService, DatePipe , ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
