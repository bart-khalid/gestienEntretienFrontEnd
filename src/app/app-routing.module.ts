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
import {BonvComponent} from './components/bonv/bonv.component';
import {BonrComponent} from './components/bonr/bonr.component';
import {AgentComponent} from './components/agent/agent.component';
import {EntretienComponent} from './components/entretien/entretien.component';
import {AuthGaurdService} from './controller/service/auth-gaurd.service';
import {PresBonCommande} from './controller/model/pres-bon-commande.model';
import {PresBonCommandeComponent} from './components/pres-bon-commande/pres-bon-commande.component';
import {PresBonLivraison} from './controller/model/pres-bon-livraison.model';
import {PresBonLivraisonComponent} from './components/pres-bon-livraison/pres-bon-livraison.component';



const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'materiel' , component: MaterielComponent, canActivate: [AuthGaurdService]},
  { path: 'entretiens' , component: EntretienComponent, canActivate: [AuthGaurdService]},
  { path: 'prestation' , component: PrestationComponent, canActivate: [AuthGaurdService]},
  { path: 'reclamations' , component: ReclamationComponent, canActivate: [AuthGaurdService]},
  { path: 'vehiculeComponent' , component: VehiculeComponent, canActivate: [AuthGaurdService]},
  { path: 'bons' , component: BonsComponent, canActivate: [AuthGaurdService]},
  { path: 'vehicule' , component: VehiculeListComponent, canActivate: [AuthGaurdService]},
  { path: 'users' , component: UsersComponent, canActivate: [AuthGaurdService]} ,
  { path: 'vehiculeeComponent' , component: VehiculeComponent, canActivate: [AuthGaurdService]},
  { path: 'fournisseur' , component: FournisseurSVComponent, canActivate: [AuthGaurdService]},
  { path: 'reclamer' , component: ReclamerComponent, canActivate: [AuthGaurdService]},
  { path: 'accueil' , component: ActionsComponent, canActivate: [AuthGaurdService]},
  { path: 'localDetail' , component: LocaldetailComponent, canActivate: [AuthGaurdService]},
  { path: 'local' , component: LocalComponent, canActivate: [AuthGaurdService]},
  { path: 'prestationInterneListe' , component: PrestationInterneListeComponent, canActivate: [AuthGaurdService]},
  { path: 'prestationExterneListe' , component: PrestationExterneListeComponent, canActivate: [AuthGaurdService]},
  { path: 'documentation' , component: DocumentationComponent, canActivate: [AuthGaurdService]},
  { path: 'agent' , component: AgentComponent, canActivate: [AuthGaurdService]},
  { path: 'bonv' , component: BonvComponent, canActivate: [AuthGaurdService]},
  { path: 'bonr' , component: BonrComponent, canActivate: [AuthGaurdService]},
  { path: 'bonsCommande' , component: PresBonCommandeComponent, canActivate: [AuthGaurdService]},
  { path: 'bonsLivraison' , component: PresBonLivraisonComponent, canActivate: [AuthGaurdService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
