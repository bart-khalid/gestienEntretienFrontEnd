import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';
import {VehiculeListComponent} from "./components/vehicule-list/vehicule-list.component";
import {VehiculeComponent} from "./components/vehicule/vehicule.component";


const routes: Routes = [
  { path: 'appComponent' , component: AppComponent} ,
  { path: 'vehiculeComponent' , component: VehiculeListComponent},
  { path: 'vehiculeeComponent' , component: VehiculeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
