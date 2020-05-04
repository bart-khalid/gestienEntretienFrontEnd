import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8090/GestionEntretien/Login/';
  constructor(private http: HttpClient) { }
  public save(user: Users) {
   return  this.http.post<number>(this.url, user);
  }
  public findAll(): Observable<Users[]>{
    return this.http.get<Users[]>(this.url);
  }


}
