import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';
import {MaterielComponent} from './components/materiel/materiel.component';
import {PrestationComponent} from './components/prestation/prestation.component';
import {ReclamationComponent} from './components/reclamation/reclamation.component';


const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'appComponent' , component: AppComponent},
  { path: 'materiel' , component: MaterielComponent},
  { path: 'prestation' , component: PrestationComponent},
  { path: 'reclamation' , component: ReclamationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
