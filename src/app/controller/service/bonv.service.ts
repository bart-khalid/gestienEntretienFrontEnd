import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BonsV} from '../model/bons-v.model';

@Injectable({
  providedIn: 'root'
})
export class BonvService {
  private url = 'http://localhost:8090/GestionEntretien/bonvidange/';
  private urlu = 'http://localhost:8090/GestionEntretien/bonvidange/update';
  private urld = 'http://localhost:8090/GestionEntretien/bonvidange/delete/';
  constructor(private http: HttpClient) {}

  public save(bonvidange: BonsV)  {
    return  this.http.post<number>(this.url, bonvidange);
  }

  public update(bonvidange: BonsV)  {
    return  this.http.put<number>(this.urlu, bonvidange);
  }
  public delete(reference: string)  {
    return  this.http.delete<number>(this.urld + reference);
  }
  public findAll(): Observable<BonsV[]> {
    return  this.http.get<BonsV[]>(this.url);
  }
}
