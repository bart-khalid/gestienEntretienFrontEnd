import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PrestationExterne} from '../model/prestation-externee.model';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PrestationExterneService {

  private _dataPresExterne : number;
  private _foundedPrestationExternes = new Array<PrestationExterne>();
  private url = 'http://localhost:8090/GestionEntretien/prestationExterne/';
  constructor(private http: HttpClient, private toast: ToastrService) { }

  public save(prestationE: PrestationExterne) {
    return this.http.post<number>(this.url, prestationE);
  }
  public update(prestationE: PrestationExterne) {
    return this.http.put<number>(this.url + 'update', prestationE);
  }
  public delete(reference: string) {
    this.http.delete<number>(this.url + 'delete/' + reference).subscribe(
      data => {
        this.findAll();
        console.log('Prestation Externe deleted');
        this.toast.success('Prestation Externe Supprimée');
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur merci de recharger la page');
      }
    );
  }
  public findAll() {
    this.http.get<Array<PrestationExterne>>(this.url).subscribe(
      data => {
        this._foundedPrestationExternes = data.reverse();
        console.log('data presExterne: ' + data.length);
        this._dataPresExterne = data.length;
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci de recharger la page');
      }
    );
  }

  get foundedPrestationExternes(): PrestationExterne[] {
    return this._foundedPrestationExternes;
  }

  set foundedPrestationExternes(value: PrestationExterne[]) {
    this._foundedPrestationExternes = value;
  }

  get dataPresExterne(): number {
    return this._dataPresExterne;
  }
}
