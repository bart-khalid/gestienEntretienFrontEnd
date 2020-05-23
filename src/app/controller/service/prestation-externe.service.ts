import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PrestationExterne} from '../model/prestation-externee.model';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PrestationExterneService {

  private url = 'http://localhost:8090/GestionEntretien/prestationExterne/';
  constructor(private http: HttpClient, private toast: ToastrService) { }

  public save(prestationE: PrestationExterne) {
    this.http.post<number>(this.url, prestationE).subscribe(
      data => {
        if (data === -1) {
          this.toast.warning('merci de choisir un locale');
        } else if (data === -2) {
          this.toast.warning('merci de choisir le materiel');
        } else {
          console.log('prestationExterne saved');
          this.toast.success('Prestation Externe Enregistrée');
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur');
      }
    );
  }
}
