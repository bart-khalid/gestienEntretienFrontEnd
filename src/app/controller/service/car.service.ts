import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http.get<Car[]>('/showcase/resources/data/cars-small.json')
      .toPromise()
      .then(data => { return data; });
  }}
