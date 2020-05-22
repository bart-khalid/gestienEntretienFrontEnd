import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entretien} from '../model/entretien.model';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {
  private url = 'http://localhost:8090/GestionEntretien/entretien/';
  private urld = 'http://localhost:8090/GestionEntretien/entretien/delete/';
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Entretien[]> {
   return this.http.get<Entretien[]>(this.url);
  }

  public delete(reference: string) {
    this.http.delete<number>(this.urld + reference).subscribe(
      data => {
        console.log('success');

      },
      error => {
        console.log('error delete');
      }
    );
  }
}
