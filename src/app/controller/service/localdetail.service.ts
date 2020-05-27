import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Localdetail} from '../model/localdetail.model';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocaldetailService {
  private _errors: number;
  private _foundedLocalDetails = new Array<Localdetail>();
  private url = 'http://localhost:8090/GestionEntretien/materielsLocale/';
  constructor(private http: HttpClient, private toast: ToastrService) { }


  get errors(): number {
    return this._errors;
  }

  public save(localeDetail: Localdetail) {
   return this.http.post<number>(this.url, localeDetail);
  }

  public update(localeDetail: Localdetail) {
   return this.http.put<number>(this.url + 'update', localeDetail);
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
