import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {hostViewClassName} from '@angular/compiler';
import {inspect} from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  curentUserType = 'admin';
  items: MenuItem[];
  itemsEmploye: MenuItem[];
ngOnInit() {
  this.items = [
    {label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: 'actions'},
    {label: 'Bons Parc Automobile', items: [
        {label: 'Carburant', icon: 'pi pi-fw pi-pencil', routerLink: 'bons'},
        {label: 'Vidange', icon: 'pi pi-fw pi-pencil', routerLink: 'bonv'},
        {label: 'Reparation', icon: 'pi pi-fw pi-pencil', routerLink: 'bonr'}], icon: 'pi pi-list' },
    {label: 'Réclamations', items: [
        {label: 'Réclamer', icon: 'pi pi-fw pi-plus', routerLink: 'reclamer'},
        {label: 'Liste Réclamations', icon: 'pi pi-fw pi-pencil' , routerLink: 'reclamations'}], icon: 'pi pi-align-justify'},
    {label: 'Prestations', items: [
        {label: 'Ajouter', icon: 'pi pi-plus', routerLink: 'prestation'},
        {label: 'Listes', items: [
            {label: 'Interne', icon: 'pi pi-fw pi-pencil', routerLink: 'prestationInterneListe'},
            {label: 'Externe', icon: 'pi pi-fw pi-pencil', routerLink: 'prestationExterneListe'}
          ], icon: 'pi pi-fw pi-pencil'}
      ], icon: 'pi pi-align-left'},

    {label: 'Gestion', items: [
        {label: 'Materiel', icon: 'pi pi-pencil', routerLink: 'materiel'},
        {label: 'Locale', icon: 'pi pi-pencil', routerLink: 'local'},
        {label: 'Affecter Materiel', icon: 'pi pi-pencil', routerLink: 'localDetail'},
        {label: 'Vehicule', icon: 'pi pi-pencil', routerLink: 'vehicule'},
        {label: 'Fournisseur', icon: 'pi pi-pencil', routerLink: 'fournisseur'},
        {label: 'Personnel', items: [{label: 'Agent', icon: 'pi pi-user-edit', routerLink: 'agent'}, {label: 'Utilisateur', icon: 'pi pi-user-edit', routerLink: 'users'}], icon: 'pi pi-users'},
      ], icon: 'pi pi-fw pi-cog'},

    {separator: true},
    {label: 'Aide',
      icon: 'pi pi-fw pi-question',
      items: [
        {label: 'Documentations', icon: 'pi pi-info', routerLink: 'documentation'},
      ]
    }
  ];

  this.itemsEmploye = [
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'actions'},
    {label: 'Reclamer', icon: 'pi pi-fw pi-plus', routerLink: 'reclamer'},
    {separator: true},
    {label: 'Aide',
      icon: 'pi pi-fw pi-question',
      items: [
        {label: 'Documentations', icon: 'pi pi-info', routerLink: 'documentation'},
      ]
    },
  ];

}
}
