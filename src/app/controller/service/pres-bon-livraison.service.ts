import { Injectable } from '@angular/core';
import {PresBonCommande} from '../model/pres-bon-commande.model';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {PresBonLivraison} from '../model/pres-bon-livraison.model';

@Injectable({
  providedIn: 'root'
})
export class PresBonLivraisonService {

  private _foundedPresBonLivraisons = new Array<PresBonLivraison>();
  private url = 'http://localhost:8090/GestionEntretien/bonLivraison/';
  constructor(private http: HttpClient, private toast: ToastrService) { }
  public findAll() {
    this.http.get<Array<PresBonLivraison>>(this.url).subscribe(
      data => {
        this._foundedPresBonLivraisons = data.reverse();
      }, error1 => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci de recharger la page');
      }
    );
  }
  public delete(referene: string) {
    this.http.delete<number>(this.url + 'delete/' + referene).subscribe(
      data => {
        console.log('bon Livraison deleted');
        this.toast.success('Bon Livraison Supprimé');
      }, error1 => {
        console.log('erreur in the link');
        this.toast.error('erreur du serveur merci de recharger la page');
      }
    );
  }

  get foundedPresBonLivraisons(): PresBonLivraison[] {
    return this._foundedPresBonLivraisons;
  }

  set foundedPresBonLivraisons(value: PresBonLivraison[]) {
    this._foundedPresBonLivraisons = value;
  }
}
