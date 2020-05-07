import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(private router: Router) { }

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Reclamer', icon: 'pi pi-fw pi-calendar', routerLink: 'reclamer'},
      {label: 'Reclamation', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];
  }
}
