import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
private url = 'http://localhost:8090/GestionEntretien/vehicule/';
private urlu = 'http://localhost:8090/GestionEntretien/vehicule/update';
private urld = 'http://localhost:8090/GestionEntretien/vehicule/deleteVehicule/';
  constructor(private http: HttpClient) {}

  public save(car: Car)  {
   return  this.http.post<number>(this.url, car);
  }

  public update(car: Car)  {
   return  this.http.put<number>(this.urlu, car);
  }
  public delete(reference: string)  {
   return  this.http.delete<number>(this.urld + reference);
  }
  public findAll(): Observable<Car[]> {
   return  this.http.get<Car[]>(this.url);
  }

 }
