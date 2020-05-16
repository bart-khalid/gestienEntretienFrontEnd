import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car';
import {Reclamation} from '../model/reclamation.model';
import {ReclamationComponent} from '../../components/reclamation/reclamation.component';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private reclamation = new Reclamation();
  // tslint:disable-next-line:variable-name
  private _reclamationsFounded = new Array<Reclamation>();
  private url = 'http://localhost:8090/GestionEntretien/reclamation/';
  constructor(private http: HttpClient) {
  }

  public findAll() {
    this.http.get<Array<Reclamation>>(this.url).subscribe(
      data => {
          this.reclamationsFounded = data.reverse();
          console.log('success');
          console.log('ha data : ' + data.length);
      }, error => {
        console.log('error in the link');
      }
    );

  }

  public save(reclamation: Reclamation, username: string) {
    this.http.post<number>(this.url + username, reclamation).subscribe(
      data => {
        if (data === -2) {
          alert('user not found');
        } else if (data === -1) {
          alert('la reference existe deja');
        } else {
          console.log('reclamation saved');
          this.findAll();
        }
      }, error => {
        console.log('error in the save link');
      }
    );
  }

  public reclamationSeen(reference: string) {
    this.http.get<number>(this.url + reference).subscribe(
      data => {
        console.log('success reclamation seen');
        this.findAll();
      }, error => {
        console.log('erroror in the link');
      }
    );
  }

  get reclamationsFounded(): Reclamation[] {
    if (this._reclamationsFounded == null) {
      this._reclamationsFounded = new Array<Reclamation>();
    }
    return this._reclamationsFounded;
  }

  set reclamationsFounded(value: Reclamation[]) {
    this._reclamationsFounded = value;
  }
}
