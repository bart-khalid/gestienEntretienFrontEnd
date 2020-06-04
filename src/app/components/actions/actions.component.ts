import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';
import {inspect} from 'util';
import {PrestationInterneService} from '../../controller/service/prestation-interne.service';
import {PrestationExterneService} from '../../controller/service/prestation-externe.service';
import {AccueilService} from '../../controller/service/accueil.service';
import {HttpClient} from '@angular/common/http';


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
  private url = 'http://localhost:8090/GestionEntretien/accueil/';
  constructor(private accueilService: AccueilService , private http: HttpClient) { }
  ngOnInit() {
    this.findALL();
    this.findAllReclamationNonLu();
    this.charts();
  }

  public findAllReclamationNonLu() {
    this.http.get<number>(this.url + 'sizeRecNonLu').subscribe(
      data => {
        this.charts();
        this.progress = false;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }
  get progress(): boolean {
   return  this.accueilService.progress;
  }
  set progress(value: boolean) {
    this.accueilService.progress = value;
  }
  public refresh() {
    this.find();
    this.progress = false;
    this.charts();

  }
  public findALL() {
   this.find();
   this.charts();
  }
  public find() {
    this.accueilService.findAllBonCarburant();
    this.accueilService.findAllBonReparation();
    this.accueilService.findAllBonVidange();
    this.accueilService.findAllBonCommande();
    this.accueilService.findAllBonLivraison();
    this.accueilService.findAllMaterielEnseinement();
    this.accueilService.findAllMaterielInformatique();
    this.accueilService.findAllPrestationExterne();
    this.accueilService.findAllPrestationInterne();
    this.accueilService.findAllReclamationNonLu();
    this.accueilService.findAllReclamationsBienTraite();
    this.accueilService.findAllReclamationSousTraitement();
    this.accueilService.findAllVehiculeAutoBus();
    this.accueilService.findAllVehiculeVoiture();
    this.accueilService.findAllUsersAdmin();
    this.accueilService.findAllUsersEmploye();
  }
  public charts() {
    this.dataREclamations = {
      labels: ['Pas Encore Vue', 'Sous Traitement', 'Bien Traitée'],

      datasets: [
        {
          data : [ this.accueilService.dataRecNonLu , this.accueilService.dataRecSousTrait, this.accueilService.dataRecBienTraite],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ]
    };

    this.dataBons = {
      datasets: [{
        data: [this.accueilService.dataBonCar, this.accueilService.dataBonVid, this.accueilService.dataBonRep,
          this.accueilService.dataBonCmd,
          this.accueilService.dataBonLiv],
        backgroundColor: ['#4BC0C0', '#E7E9ED', '#36A2EB', '#fbef9b', '#00ffa5'],
        label: 'My dataset'
      }],
      labels: ['Carburant', 'Vidange', 'Réparation', 'Commande', 'Livraison']
    };


    this.dataPrestations = {
      labels: ['Interne', 'Externe'],
      datasets: [
        {
          data : [this.accueilService.dataPresInterne, this.accueilService.dataPresExterne],
          backgroundColor: ['#FFCE56', '#4BC0C0'],
          hoverBackgroundColor: ['#FFCE56', '#4BC0C0']
        },
      ]
    };

    this.dataUtilisateur = {
      labels: ['Administrateur', 'Utilisateur normal'],
      datasets: [
        {
          data : [this.accueilService.dataUsersAd, this.accueilService.dataUsersEmp],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB']
        },
      ]
    };

    this.dataMateriel = {
      labels: ['Informatique', 'Enseignement'],
      datasets: [
        {
          data : [this.accueilService.dataMaterielInf, this.accueilService.dataMaterielEns],
          backgroundColor: ['#FF6384', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56']
        },
      ]
    };

    this.dataVehicule = {
      datasets: [{
        data: [this.accueilService.dataVehiculeBus, this.accueilService.dataVehiculeVoi],
        backgroundColor: ['#4BC0C0', '#E7E9ED'],
        label: 'My dataset'
      }],
      labels: ['AutoBus', 'Voiture']
    };
  }
}
