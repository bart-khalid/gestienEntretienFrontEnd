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
import {ReclamerComponent} from './components/reclamer/reclamer.component';
import {UsersComponent} from './components/users/users.component';
import {FournisseurSVComponent} from './components/fournisseur-sv/fournisseur-sv.component';
import {ActionsComponent} from './components/actions/actions.component';
import {LocaldetailComponent} from './components/localdetail/localdetail.component';
import {LocalComponent} from './components/local/local.component';
import {PrestationInterneListeComponent} from './components/prestation-interne-liste/prestation-interne-liste.component';
import {PrestationExterneListeComponent} from './components/prestation-externe-liste/prestation-externe-liste.component';
import {DocumentationComponent} from './components/documentation/documentation.component';


const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'materiel' , component: MaterielComponent},
  { path: 'prestation' , component: PrestationComponent},
  { path: 'reclamation' , component: ReclamationComponent},
  { path: 'vehiculeComponent' , component: VehiculeComponent},
  { path: 'bons' , component: BonsComponent},
  { path: 'vehicule' , component: VehiculeListComponent},
  { path: 'users' , component: UsersComponent} ,
  { path: 'vehiculeeComponent' , component: VehiculeComponent},
  { path: 'bon' , component: BonsComponent},
  { path: 'fournisseur' , component: FournisseurSVComponent},
  { path: 'reclamer' , component: ReclamerComponent},
  { path: 'actions' , component: ActionsComponent},
  { path: 'localDetail' , component: LocaldetailComponent},
  { path: 'local' , component: LocalComponent},
  { path: 'prestationInterneListe' , component: PrestationInterneListeComponent},
  { path: 'prestationExterneListe' , component: PrestationExterneListeComponent},
  { path: 'documentation' , component: DocumentationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
