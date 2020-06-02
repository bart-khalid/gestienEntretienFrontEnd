import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  // tslint:disable-next-line:variable-name
  private _progress: boolean;
  private url = 'http://localhost:8090/GestionEntretien/accueil/';
  // tslint:disable-next-line:variable-name
  private _dataPresInterne: number;
  // tslint:disable-next-line:variable-name
  private _dataPresExterne: number;
  // tslint:disable-next-line:variable-name
  private _dataRecSousTrait: number;
  // tslint:disable-next-line:variable-name
  private _dataMaterielEns: number;
  // tslint:disable-next-line:variable-name
  private _dataRecBienTraite: number;
  // tslint:disable-next-line:variable-name
  private _dataRecNonLu: number;
  // tslint:disable-next-line:variable-name
  private _dataBonCar: number;
  // tslint:disable-next-line:variable-name
  private _dataBonVid: number;
  // tslint:disable-next-line:variable-name
  private _dataBonRep: number;
  // tslint:disable-next-line:variable-name
  private _dataUsersAd: number;
  // tslint:disable-next-line:variable-name
  private _dataUsersEmp: number;
  // tslint:disable-next-line:variable-name
  private _dataVehiculeVoi: number;
  // tslint:disable-next-line:variable-name
  private _dataVehiculeBus: number;
  // tslint:disable-next-line:variable-name
  private _dataMaterielInf: number;
  // tslint:disable-next-line:variable-name
  private _dataBonCmd: number;
  // tslint:disable-next-line:variable-name
  private _dataBonLiv: number;
  constructor(private http: HttpClient) { }



  public findAllPrestationInterne() {
    this.http.get<number>(this.url + 'sizePresIn').subscribe(
      data => {
        this._dataPresInterne = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllPrestationExterne() {
    this.http.get<number>(this.url + 'sizePresExt').subscribe(
      data => {
        this._dataPresExterne = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllReclamationNonLu() {
    this.http.get<number>(this.url + 'sizeRecNonLu').subscribe(
      data => {
        this.dataRecNonLu = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }


  public findAllReclamationSousTraitement() {
    this.http.get<number>(this.url + 'sizeRecSousTraite').subscribe(
      data => {
        this._dataRecSousTrait = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllReclamationsBienTraite() {
    this.http.get<number>(this.url + 'sizeRecBienTraite').subscribe(
      data => {
        this._dataRecBienTraite = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllBonCarburant() {
    this._progress = true;
    this.http.get<number>(this.url + 'sizeBonCar').subscribe(
      data => {
        this.dataBonCar = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllBonVidange() {
    this.http.get<number>(this.url + 'sizeBonVid').subscribe(
      data => {
        this.dataBonVid = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllBonReparation() {
    this.http.get<number>(this.url + 'sizeBonRep').subscribe(
      data => {
        this.dataBonRep = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllUsersAdmin() {
    this.http.get<number>(this.url + 'sizeUsersAD').subscribe(
      data => {
        this._dataUsersAd = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }
    public findAllUsersEmploye() {
      this.http.get<number>(this.url + 'sizeUsersEM').subscribe(
        data => {
          this._dataUsersEmp = data;
        }, error => {
          console.log('erreur du serveur');
        }
      );
    }

  public findAllVehiculeAutoBus() {
    this.http.get<number>(this.url + 'sizeVehBus').subscribe(
      data => {
        this._dataVehiculeBus = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllVehiculeVoiture() {
    this.http.get<number>(this.url + 'sizeVehVoi').subscribe(
      data => {
        this._dataVehiculeVoi = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllMaterielInformatique() {
    this.http.get<number>(this.url + 'sizeMatInf').subscribe(
      data => {
        this._dataMaterielInf = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }


  public findAllMaterielEnseinement() {
    this.http.get<number>(this.url + 'sizeMatEn').subscribe(
      data => {
        this._dataMaterielEns = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllBonCommande() {
    this.http.get<number>(this.url + 'sizeBonCmd').subscribe(
      data => {
        this._dataBonCmd = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllBonLivraison() {
    this.http.get<number>(this.url + 'sizeBonLiv').subscribe(
      data => {
        this._dataBonLiv = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }


  get progress(): boolean {
    return this._progress;
  }

  set progress(value: boolean) {
    this._progress = value;
  }

  get dataPresInterne(): number {
    return this._dataPresInterne;
  }

  set dataPresInterne(value: number) {
    this._dataPresInterne = value;
  }

  get dataPresExterne(): number {
    return this._dataPresExterne;
  }

  set dataPresExterne(value: number) {
    this._dataPresExterne = value;
  }

  get dataRecSousTrait(): number {
    return this._dataRecSousTrait;
  }

  set dataRecSousTrait(value: number) {
    this._dataRecSousTrait = value;
  }

  get dataMaterielEns(): number {
    return this._dataMaterielEns;
  }

  set dataMaterielEns(value: number) {
    this._dataMaterielEns = value;
  }

  get dataRecBienTraite(): number {
    return this._dataRecBienTraite;
  }

  set dataRecBienTraite(value: number) {
    this._dataRecBienTraite = value;
  }

  get dataRecNonLu(): number {
    return this._dataRecNonLu;
  }

  set dataRecNonLu(value: number) {
    this._dataRecNonLu = value;
  }

  get dataBonCar(): number {
    return this._dataBonCar;
  }

  set dataBonCar(value: number) {
    this._dataBonCar = value;
  }

  get dataBonVid(): number {
    return this._dataBonVid;
  }

  set dataBonVid(value: number) {
    this._dataBonVid = value;
  }

  get dataBonRep(): number {
    return this._dataBonRep;
  }

  set dataBonRep(value: number) {
    this._dataBonRep = value;
  }

  get dataUsersAd(): number {
    return this._dataUsersAd;
  }

  set dataUsersAd(value: number) {
    this._dataUsersAd = value;
  }

  get dataUsersEmp(): number {
    return this._dataUsersEmp;
  }

  set dataUsersEmp(value: number) {
    this._dataUsersEmp = value;
  }

  get dataVehiculeVoi(): number {
    return this._dataVehiculeVoi;
  }

  set dataVehiculeVoi(value: number) {
    this._dataVehiculeVoi = value;
  }

  get dataVehiculeBus(): number {
    return this._dataVehiculeBus;
  }

  set dataVehiculeBus(value: number) {
    this._dataVehiculeBus = value;
  }

  get dataMaterielInf(): number {
    return this._dataMaterielInf;
  }

  set dataMaterielInf(value: number) {
    this._dataMaterielInf = value;
  }

  get dataBonCmd(): number {
    return this._dataBonCmd;
  }

  set dataBonCmd(value: number) {
    this._dataBonCmd = value;
  }

  get dataBonLiv(): number {
    return this._dataBonLiv;
  }

  set dataBonLiv(value: number) {
    this._dataBonLiv = value;
  }
}
