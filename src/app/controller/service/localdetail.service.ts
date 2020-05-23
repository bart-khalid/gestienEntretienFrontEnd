import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Localdetail} from '../model/localdetail.model';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocaldetailService {

  private _foundedLocalDetails = new Array<Localdetail>();
  private url = 'http://localhost:8090/GestionEntretien/materielsLocale/';
  constructor(private http: HttpClient, private toast: ToastrService) { }

  public save(localeDetail: Localdetail) {
    this.http.post<number>(this.url, localeDetail).subscribe(
      data => {
        if (data === 1) {
          console.log('success Materiel affected');
          this.findAll();
          this.toast.success('Materiel affecté');
        } else {
          this.toast.error('Reference du materiel dupliquée');
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public update(localeDetail: Localdetail) {
    this.http.put<number>(this.url + 'update', localeDetail).subscribe(
      data => {
        if (data === -1) {
          this.toast.warning('erreur verifier que tous les champs sont remplis');
        } else {
          console.log('success Materiel updated');
          this.toast.info('Materiel modifié');
          this.findAll();
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public delete(reference: string) {
    this.http.delete<number>(this.url + 'deleteMateriel/' + reference ).subscribe(
      data => {
        console.log('success Materiel deleted');
        this.toast.success('Materiel supprimé');
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public findAll() {
    this.http.get<Array<Localdetail>>(this.url).subscribe(
      data => {
        console.log('data MaterielLocale : ' + data.length);
        this._foundedLocalDetails = data.reverse();
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  get foundedLocalDetails(): Localdetail[] {
    return this._foundedLocalDetails;
  }

  set foundedLocalDetails(value: Localdetail[]) {
    this._foundedLocalDetails = value;
  }
}
