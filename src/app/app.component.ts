import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: MenuItem[];
ngOnInit() {
  this.items = [
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'actions'},
    {label: 'Bons', items: [
        {label: 'Carburant', icon: 'pi pi-fw pi-pencil'},
        {label: 'Vidange', icon: 'pi pi-fw pi-pencil'},
        {label: 'Reparation', icon: 'pi pi-fw pi-pencil'}], icon: 'pi pi-ellipsis-v', routerLink: 'bons' },
    {label: 'Reclamations', items: [
        {label: 'Reclamer', icon: 'pi pi-fw pi-plus', routerLink: 'reclamer'},
        {label: 'Reclamations', icon: 'pi pi-fw pi-pencil' , routerLink: 'reclamation'}
      ], icon: 'pi pi-align-justify'},
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
        {label: 'Utilisateur', icon: 'pi pi-users', routerLink: 'users'},
      ], icon: 'pi pi-fw pi-cog'},

    {separator: true},
    {label: 'Aide',
      icon: 'pi pi-fw pi-question',
      items: [
        {label: 'Documentations', icon: 'pi pi-info', routerLink: 'documentation'},
      ]
    }
  ];
}
}
