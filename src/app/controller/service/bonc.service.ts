import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BonsC} from '../model/bons-c.model';

@Injectable({
  providedIn: 'root'
})
export class BoncService {
  private url = 'http://localhost:8090/GestionEntretien/boncarburant/';
  private urlu = 'http://localhost:8090/GestionEntretien/boncarburant/update';
  private urld = 'http://localhost:8090/GestionEntretien/boncarburant/delete/';
  constructor(private http: HttpClient) {}

  public save(boncarburant: BonsC)  {
    return  this.http.post<number>(this.url, boncarburant);
  }

  public update(boncarburant: BonsC)  {
    return  this.http.put<number>(this.urlu, boncarburant);
  }
  public delete(reference: string)  {
    return  this.http.delete<number>(this.urld + reference);
  }
  public findAll(): Observable<BonsC[]> {
    return  this.http.get<BonsC[]>(this.url);
  }
}
