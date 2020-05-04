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
          this.reclamationsFounded = data;
          console.log('success');
          console.log('ha data : ' + data.length);
      }, error => {
        console.log('erroror f link');
      }
    );

  }

  public findAllR(): Array<Reclamation> {
    this.http.get<Array<Reclamation>>(this.url).subscribe(
      data => {
          this.reclamationsFounded = data;
          console.log('success');
          console.log('ha data : ' + this.reclamationsFounded.length);
      }, error => {
        console.log('erroror f link');
      }
    );
    return this.reclamationsFounded;
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
