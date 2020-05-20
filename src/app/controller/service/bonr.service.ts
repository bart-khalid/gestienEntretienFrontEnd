import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BonsR} from '../model/bons-r.model';

@Injectable({
  providedIn: 'root'
})
export class BonrService {
  private url = 'http://localhost:8090/GestionEntretien/bonreparation/';
  private urlu = 'http://localhost:8090/GestionEntretien/bonreparation/update';
  private urld = 'http://localhost:8090/GestionEntretien/bonreparation/delete/';
  constructor(private http: HttpClient) {}

  public save(bonreparation: BonsR)  {
    return  this.http.post<number>(this.url, bonreparation);
  }

  public update(bonreparation: BonsR)  {
    return  this.http.put<number>(this.urlu, bonreparation);
  }
  public delete(reference: string)  {
    return  this.http.delete<number>(this.urld + reference);
  }
  public findAll(): Observable<BonsR[]> {
    return  this.http.get<BonsR[]>(this.url);
  }
}
