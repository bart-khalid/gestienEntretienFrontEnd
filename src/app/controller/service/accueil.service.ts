import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

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
        this._dataRecNonLu = data;
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
        this._dataBonCar = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllBonVidange() {
    this.http.get<number>(this.url + 'sizeBonVid').subscribe(
      data => {
        this._dataBonVid = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllBonReparation() {
    this.http.get<number>(this.url + 'sizeBonRep').subscribe(
      data => {
        this._dataBonRep = data;
      }, error => {
        console.log('erreur du serveur');
      }
    );
  }

  public findAllUsersAdmin() {
    this.http.get<number>(this.url + 'sizeUsersAD').subscribe(
      data => {
        this._dataUsersAd = data;
        this._progress = false;
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


  get progress(): boolean {
    return this._progress;
  }

  get dataPresInterne(): number {
    return this._dataPresInterne;
  }

  get dataPresExterne(): number {
    return this._dataPresExterne;
  }

  get dataMaterielEns(): number {
    return this._dataMaterielEns;
  }

  get dataRecBienTraite(): number {
    return this._dataRecBienTraite;
  }

  get dataRecNonLu(): number {
    return this._dataRecNonLu;
  }

  get dataBonCar(): number {
    return this._dataBonCar;
  }

  get dataBonVid(): number {
    return this._dataBonVid;
  }

  get dataBonRep(): number {
    return this._dataBonRep;
  }

  get dataMaterielInf(): number {
    return this._dataMaterielInf;
  }

  get dataRecSousTrait(): number {
    return this._dataRecSousTrait;
  }

  get dataUsersAd(): number {
    return this._dataUsersAd;
  }

  get dataUsersEmp(): number {
    return this._dataUsersEmp;
  }

  get dataVehiculeVoi(): number {
    return this._dataVehiculeVoi;
  }

  get dataVehiculeBus(): number {
    return this._dataVehiculeBus;
  }
}
