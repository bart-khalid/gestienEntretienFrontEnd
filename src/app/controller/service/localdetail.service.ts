import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Localdetail} from '../model/localdetail.model';

@Injectable({
  providedIn: 'root'
})
export class LocaldetailService {

  private _foundedLocalDetails = new Array<Localdetail>();
  private url = 'http://localhost:8090/GestionEntretien/materielsLocale/';
  constructor(private http: HttpClient) { }

  public save(localeDetail: Localdetail) {
    this.http.post<number>(this.url, localeDetail).subscribe(
      data => {
        console.log('success Materiel affected');
        this.findAll();
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public update(localeDetail: Localdetail) {
    this.http.put<number>(this.url + 'update', localeDetail).subscribe(
      data => {
        console.log('success Materiel updated');
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public delete(reference: string) {
    this.http.delete<number>(this.url + 'deleteMateriel/' + reference ).subscribe(
      data => {
        console.log('success Materiel deleted');
      }, error => {
        console.log('error in the link');
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
