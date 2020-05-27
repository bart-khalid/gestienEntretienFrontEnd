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
    return this.http.post<number>(this.url, prestationE);
  }
}
