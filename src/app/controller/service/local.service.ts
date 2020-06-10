import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Local} from '../model/local.model';
import {log} from 'util';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private _foudedLocales = new Array<Local>();
  private url = 'http://localhost:8090/GestionEntretien/locale/';
  constructor(private http: HttpClient, private toast: ToastrService) { }

  public save(locale: Local) {
    this.http.post<number>(this.url, locale).subscribe(
      data => {
        console.log('success locale saved');
        this.findAll();
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public update(locale: Local) {
    this.http.put<number>(this.url + 'update', locale).subscribe(
      data => {
        console.log('success locale updated');
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public delete(reference: string) {
    this.http.delete<number>(this.url + 'deleteLocale/' + reference).subscribe(
      data => {
        console.log('success locale deleted');
        console.log('data deleted : ' + data);
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public findAll() {
    this.http.get<Array<Local>>(this.url).subscribe(
      data => {
        this._foudedLocales = data.reverse();
        console.log('data locale: ' + data.length);
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public findalll() {
   return this.http.get<Array<Local>>(this.url);
  }

  get foudedLocales(): Local[] {
    return this._foudedLocales;
  }

  set foudedLocales(value: Local[]) {
    this._foudedLocales = value;
  }
}
