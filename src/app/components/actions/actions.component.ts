import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';
import {inspect} from 'util';
import {PrestationInterneService} from '../../controller/service/prestation-interne.service';
import {PrestationExterneService} from '../../controller/service/prestation-externe.service';


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
  constructor(private prestationInterneService: PrestationInterneService,
              private prestationExterneService: PrestationExterneService,
              ) { }
  ngOnInit() {
    this.prestationInterneService.findAll();
    this.prestationExterneService.findAll();
    this.charts();
  }

  charts() {
    this.dataREclamations = {
      labels: ['Non Vue', 'Sous Traitement', 'Bien Traitée'],

      datasets: [
        {
          data : [1, 80, 3],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ]
    };


    this.dataBons = {
      datasets: [{
        data: [
          11,
          16,
          7

        ],
        backgroundColor: [

          '#4BC0C0',

          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'My dataset'
      }],
      labels: [
        'Carburant',
        'Vidange',
        'Reparation'

      ]
    };


    this.dataPrestations = {
      labels: ['Interne', 'Externe'],
      datasets: [
        {
          data : [21, 12],
          backgroundColor: ['#FFCE56', '#4BC0C0'],
          hoverBackgroundColor: ['#FFCE56', '#4BC0C0']
        },
      ]
    };

    this.dataUtilisateur = {
      labels: ['Admin', 'Employe'],
      datasets: [
        {
          data : [50, 80],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB']
        },
      ]
    };

    this.dataMateriel = {
      labels: ['Informatique', 'Enseignement'],
      datasets: [
        {
          data : [50, 80],
          backgroundColor: ['#FF6384', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56']
        },
      ]
    };




    this.dataVehicule = {
      datasets: [{
        data: [
          2,
          7

        ],
        backgroundColor: [

          '#4BC0C0',

          '#E7E9ED'
        ],
        label: 'My dataset'
      }],
      labels: [
        'AutoBus',
        'Voiture'

      ]
    };
  }

}
