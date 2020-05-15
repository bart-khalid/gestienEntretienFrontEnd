import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Materiel} from '../model/materiel.model';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private url: 'http://localhost:8090/GestionEntretien/materiel/'
  constructor(private http: HttpClient) {}
  save(materiel: Materiel) {
    this.http.post(this.url, materiel).subscribe(
      data => {
        if (data === 1) {
          console.log('material saved');
        } else {
          console.log('matereil not saved');
        }
      }, error => {
        console.log('error in the link ');
      }
    );
  }
}
