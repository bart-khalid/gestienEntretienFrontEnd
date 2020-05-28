import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {PresBonCommande} from '../model/pres-bon-commande.model';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PresBonCommandeService {

  private _foundedPresBonCommandes: Array<PresBonCommande>;
  private url = 'http://localhost:8090/GestionEntretien/bonCommande/';
  constructor(private http: HttpClient, private toast: ToastrService) { }

  public findAll() {
    this.http.get<Array<PresBonCommande>>(this.url).subscribe(
      data => {
        this._foundedPresBonCommandes = data.reverse();
      }, error1 => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci de recharger la page');
      }
    );
  }
  public delete(referene: string) {
    this.http.delete<number>(this.url + 'delete/' + referene).subscribe(
      data => {
        console.log('bon commande deleted');
        this.toast.success('Bon Commande Supprimé');
      }, error1 => {
        console.log('erreur in the link');
        this.toast.error('erreur du serveur merci de recharger la page');
      }
    );
  }

  get foundedPresBonCommandes(): Array<PresBonCommande> {
    return this._foundedPresBonCommandes;
  }

  set foundedPresBonCommandes(value: Array<PresBonCommande>) {
    this._foundedPresBonCommandes = value;
  }
}
