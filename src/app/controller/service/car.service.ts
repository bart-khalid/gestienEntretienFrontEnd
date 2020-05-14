import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
private url = 'http://localhost:8090/GestionEntretien/Vehicule/';
  constructor(private http: HttpClient) {}

  public save(car: Car)  {
   return  this.http.post<number>(this.url, car);
  }
 }
