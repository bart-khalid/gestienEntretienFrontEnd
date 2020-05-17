import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urls = 'http://localhost:8090/GestionEntretien/Login/';
  private urlu = 'http://localhost:8090/GestionEntretien/Login/update/';
  private urld = 'http://localhost:8090/GestionEntretien/Login/delete/';
  constructor(private http: HttpClient) { }
  public save(user: Users) {
   return  this.http.post<number>(this.urls, user);
  }
  public update(user: Users) {
   return  this.http.put<number>(this.urlu, user);
  }
  public delete(username: string) {
   return  this.http.delete<number>(this.urld + '/' + username);
  }

  public findAll(): Observable<Users[]>{
    return this.http.get<Users[]>(this.urls);
  }


}
