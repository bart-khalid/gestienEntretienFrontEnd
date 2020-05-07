import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
