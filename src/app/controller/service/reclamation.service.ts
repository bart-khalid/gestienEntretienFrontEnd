import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car';
import {Reclamation} from '../model/reclamation.model';
import {ReclamationComponent} from '../../components/reclamation/reclamation.component';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private reclamation = new Reclamation();
  // tslint:disable-next-line:variable-name
  private _reclamationsFounded = new Array<Reclamation>();
  // tslint:disable-next-line:variable-name
  private _foundedReclamationsNonTraiter = new Array<Reclamation>();
  // tslint:disable-next-line:variable-name
  private _foundedReclamationsemploye = new Array<Reclamation>();
  private url = 'http://localhost:8090/GestionEntretien/reclamation/';
  private urlr = 'http://localhost:8090/GestionEntretien/reclamation/reclaments/';

  constructor(private http: HttpClient, private toast: ToastrService) {
  }


  get foundedReclamationsemploye(): Reclamation[] {
    return this._foundedReclamationsemploye;
  }

  set foundedReclamationsemploye(value: Reclamation[]) {
    this._foundedReclamationsemploye = value;
  }

  public findbyreclament(username: string) {
    this.http.get<Array<Reclamation>>(this.urlr + username).subscribe(
      data => {
        this.foundedReclamationsemploye = data.reverse();
        console.log('Reclamations employe data : ' + data.length);
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public findAll() {
    this.http.get<Array<Reclamation>>(this.url).subscribe(
      data => {
          this.reclamationsFounded = data.reverse();
          console.log('Reclamations data : ' + data.length);
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );

  }

  public save(reclamation: Reclamation, username: string) {
    return this.http.post<number>(this.url + username, reclamation);
  }

  public update(reclamation: Reclamation) {
    return this.http.put<number>(this.url + 'update', reclamation);
  }

  public delete(reference: string) {
    return this.http.delete<number>(this.url + 'deleteReclamation/' + reference);
  }

  public reclamationSeen(reference: string) {
    this.http.get<number>(this.url + reference).subscribe(
      data => {
        console.log('success reclamation seen');
        this.toast.success('Reclamation vue');
        this.findAll();
      }, error => {
        console.log('erroror in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public findAllReclamationsNonTraiter() {
   this.http.get<Array<Reclamation>>(this.url + 'reclamations').subscribe(
     data => {
       this.foundedReclamationsNonTraiter = data.reverse();
       console.log('Reclamation non traitées data: ' + data.length);
     }, error => {
       console.log('error in the link');
       this.toast.error('erreur du serveur merci d\' actualiser la page');
     }
   );
  }



  get foundedReclamationsNonTraiter(): Reclamation[] {
    return this._foundedReclamationsNonTraiter;
  }

  set foundedReclamationsNonTraiter(value: Reclamation[]) {
    this._foundedReclamationsNonTraiter = value;
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
