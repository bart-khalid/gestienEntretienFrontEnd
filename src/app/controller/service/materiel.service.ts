import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Materiel} from '../model/materiel.model';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private _foundedMateriels = new Array<Materiel>();
  private url = 'http://localhost:8090/GestionEntretien/materiel/';
  constructor(private http: HttpClient) {}

  save(materiel: Materiel) {
    this.http.post<number>(this.url, materiel).subscribe(
      data => {
        this.findAll();
        console.log('material saved');
      }, error => {
        console.log('error in the link ');
      }
    );
  }
  update(materiel: Materiel) {
    this.http.put<number>(this.url + 'update', materiel).subscribe(
      data => {
        console.log('material updated');
        this.findAll();
      }, error => {
        console.log('error in the link ');
      }
    );
  }
  delete(reference: string) {
    this.http.delete<number>(this.url + 'deleteMateriel/' + reference).subscribe(
      data => {
        console.log('material deleted');
      }, error => {
        console.log('error in the link ');
      }
    );
  }
  public findAll() {
    this.http.get<Array<Materiel>>(this.url).subscribe(
      data => {
        this._foundedMateriels = data.reverse();
        console.log('data Materiel :' + data.length);
      }, error => {
        console.log('error in the link');
      }
    );
  }

  get foundedMateriels(): Materiel[] {
    return this._foundedMateriels;
  }

  set foundedMateriels(value: Materiel[]) {
    this._foundedMateriels = value;
  }
}
