import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';
import {VehiculeListComponent} from './components/vehicule-list/vehicule-list.component';
import {VehiculeComponent} from './components/vehicule/vehicule.component';
import {BonsComponent} from './components/bons/bons.component';
import {UsersComponent} from './components/users/users.component';
import {FournisseurSVComponent} from './components/fournisseur-sv/fournisseur-sv.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
