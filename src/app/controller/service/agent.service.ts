import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Agent} from '../model/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private url = 'http://localhost:8090/GestionEntretien/agent/';
  private urlu = 'http://localhost:8090/GestionEntretien/agent/update';
  private urld = 'http://localhost:8090/GestionEntretien/agent/deleteAgent/';
  constructor(private http: HttpClient) {}

  public save(agent: Agent)  {
    return  this.http.post<number>(this.url, agent);
  }

  public update(agent: Agent)  {
    return  this.http.put<number>(this.urlu, agent);
  }
  public delete(reference: string)  {
    return  this.http.delete<number>(this.urld + reference);
  }
  public findAll(): Observable<Agent[]> {
    return  this.http.get<Agent[]>(this.url);
  }

}
