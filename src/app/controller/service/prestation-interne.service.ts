import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PrestationInterne} from '../model/prestation-interne.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationInterneService {

  private _foundedPrestationInternes = new Array<PrestationInterne>();
  private url = 'http://localhost:8090/GestionEntretien/prestationInterne/';
  constructor(private http: HttpClient) { }

  public save(prestationInterne: PrestationInterne) {
    this.http.post<number>(this.url, prestationInterne).subscribe(
      data => {
        console.log('success prestationInterne saved');
        this.findAll();
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public update(prestationInterne: PrestationInterne) {
    this.http.put<number>(this.url + 'update', prestationInterne).subscribe(
      data => {
        console.log('success prestationInterne updated');
        this.findAll();
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public delete(reference: string) {
    this.http.delete<number>(this.url + 'deletePrestationInterne/' + reference).subscribe(
      data => {
        console.log('success prestationInterne deleted');
        this.findAll();
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public findAll() {
    this.http.get<Array<PrestationInterne>>(this.url).subscribe(
      data => {
        this._foundedPrestationInternes = data.reverse();
        console.log('PrestationInternes data: ' + data.length);
      }, error => {
        console.log('error in the link');
      }
    );
  }


  get foundedPrestationInternes(): PrestationInterne[] {
    return this._foundedPrestationInternes;
  }

  set foundedPrestationInternes(value: PrestationInterne[]) {
    this._foundedPrestationInternes = value;
  }
}
