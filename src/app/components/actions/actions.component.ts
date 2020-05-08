import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  dataREclamations: any;
  dataPrestations: any;
  dataBons: any;
  dataUtilisateur: any;
  dataVehicule: any;
  dataMateriel: any;
  constructor() { }
  ngOnInit() {
    this.dataREclamations = {
      labels: ['Crée', 'Sous Traitement', 'Bien traitée'],
      datasets: [
        {
          data : [1, 80, 3],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        },
      ]
    };

    this.dataBons = {
      labels: ['Carburant', 'Vidange', 'Reparation'],
      datasets: [
        {
          data : [8, 80, 65],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        },
      ]
    };

    this.dataPrestations = {
      labels: ['Prestations'],
      datasets: [
        {
          label: 'Interne',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [1]
        },
        {
          label: 'Externe',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [5]
        }
      ]
    };

  }
}
