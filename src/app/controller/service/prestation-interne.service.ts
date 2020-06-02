import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PrestationInterne} from '../model/prestation-interne.model';
import {ReclamationService} from './reclamation.service';
import {ToastrService} from 'ngx-toastr';
import {forEachComment} from 'tslint';

@Injectable({
  providedIn: 'root'
})
export class PrestationInterneService {

  private _dataPresInterne: number;
  private _foundedPrestationInternes = new Array<PrestationInterne>();
  private url = 'http://localhost:8090/GestionEntretien/prestationInterne/';
  private _progress: boolean;
  constructor(private http: HttpClient, private reclamationService: ReclamationService, private toast: ToastrService) { }

  public save(prestationInterne: PrestationInterne) {
    return  this.http.post<number>(this.url, prestationInterne);
  }

  public update(prestationInterne: PrestationInterne) {
    return this.http.put<number>(this.url + 'update', prestationInterne);
  }

  public delete(reference: string) {
    this._progress = true;
    this.http.delete<number>(this.url + 'deletePrestationInterne/' + reference).subscribe(
      data => {
        console.log('success prestationInterne deleted');
        this.toast.success('Prestation Interne Supprimée');
        this.findAll();
        this._progress = false;
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public findAll() {
    this._progress = true;
    this.http.get<Array<PrestationInterne>>(this.url).subscribe(
      data => {
        this._foundedPrestationInternes = data.reverse();
        for (const r of this.foundedPrestationInternes) {
          if (r.reclamedI) {
            r.etatBoolean = 'Oui';
          } else {
            r.etatBoolean = 'Non';
          }
        }
        console.log('Prestations Internes data: ' + data.length);
        this._dataPresInterne = data.length;
        this._progress = false;
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }


  get foundedPrestationInternes(): PrestationInterne[] {
    return this._foundedPrestationInternes;
  }

  set foundedPrestationInternes(value: PrestationInterne[]) {
    this._foundedPrestationInternes = value;
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
}
