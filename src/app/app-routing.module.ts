import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';
import {MaterielComponent} from './components/materiel/materiel.component';
import {PrestationComponent} from './components/prestation/prestation.component';
import {ReclamationComponent} from './components/reclamation/reclamation.component';
import {VehiculeComponent} from './components/vehicule/vehicule.component';
import {VehiculeListComponent} from './components/vehicule-list/vehicule-list.component';
import {BonsComponent} from './components/bons/bons.component';
import {UsersComponent} from './components/users/users.component';
import {FournisseurSVComponent} from './components/fournisseur-sv/fournisseur-sv.component';
import {LocalComponent} from "./components/local/local.component";
import {LocaldetailComponent} from "./components/localdetail/localdetail.component";
import {ReclamerComponent} from "./components/reclamer/reclamer.component";


const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'materiel' , component: MaterielComponent},
  { path: 'prestation' , component: PrestationComponent},
  { path: 'reclamation' , component: ReclamationComponent},
  { path: 'vehiculeComponent' , component: VehiculeComponent},
  { path: 'bons' , component: BonsComponent},
  { path: 'vehiculeeComponent' , component: VehiculeListComponent},
  { path: 'appComponent' , component: AppComponent} ,
  { path: 'users' , component: UsersComponent} ,
  { path: 'vehiculeeComponent' , component: VehiculeComponent},
  { path: 'bon' , component: BonsComponent},
  { path: 'fournisseursv' , component: FournisseurSVComponent},
  { path: 'local' , component: LocalComponent},
  { path: 'localdetails' , component: LocaldetailComponent},
  { path: 'reclamer' , component: ReclamerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
