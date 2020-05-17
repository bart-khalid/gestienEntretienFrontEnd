import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Local} from '../model/local.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private _foudedLocales = new Array<Local>();
  private url = 'http://localhost:8090/GestionEntretien/locale/';
  constructor(private http: HttpClient) { }

  public save(locale: Local) {
    this.http.post<number>(this.url, locale).subscribe(
      data => {
        console.log('success locale saved');
        this.findAll();
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public update(locale: Local) {
    this.http.put<number>(this.url + 'update', locale).subscribe(
      data => {
        console.log('success locale updated');
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public delete(reference: string) {
    this.http.delete<number>(this.url + 'deleteLocale/' + reference).subscribe(
      data => {
        console.log('success locale deleted');
      }, error => {
        console.log('error in the link');
      }
    );
  }

  public findAll() {
    this.http.get<Array<Local>>(this.url).subscribe(
      data => {
        this._foudedLocales = data.reverse();
        console.log('data locle: ' + data.length);
      }, error => {
        console.log('error in the link');
      }
    );
  }

  get foudedLocales(): Local[] {
    return this._foudedLocales;
  }

  set foudedLocales(value: Local[]) {
    this._foudedLocales = value;
  }
}
