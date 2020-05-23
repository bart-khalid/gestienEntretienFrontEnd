import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PrestationInterne} from '../model/prestation-interne.model';
import {ReclamationService} from './reclamation.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PrestationInterneService {

  private _foundedPrestationInternes = new Array<PrestationInterne>();
  private url = 'http://localhost:8090/GestionEntretien/prestationInterne/';
  constructor(private http: HttpClient, private reclamationService: ReclamationService, private toast: ToastrService) { }

  public save(prestationInterne: PrestationInterne) {
    this.http.post<number>(this.url, prestationInterne).subscribe(
      data => {
        if (data === -2) {
          this.toast.warning('erreur vérifiez que tous les champs sont remplis');
        } else if (data === -3) {
          this.toast.warning('merci de choisir le materiel');
        } else {
          console.log('success prestationInterne saved');
          this.toast.success('Prestation Interne Enregitrée');
          this.findAll();
          this.reclamationService.findAll();
          this.reclamationService.findAllReclamationsNonTraiter();
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public update(prestationInterne: PrestationInterne) {
    this.http.put<number>(this.url + 'update', prestationInterne).subscribe(
      data => {
        if (data === -2) {
          this.toast.warning('erreur vérifiez que tous les champs sont remplis');
        } else {
          console.log('success prestationInterne updated');
          this.toast.info('Prestation Interne Modifiée');
          this.findAll();
        }
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public delete(reference: string) {
    this.http.delete<number>(this.url + 'deletePrestationInterne/' + reference).subscribe(
      data => {
        console.log('success prestationInterne deleted');
        this.toast.success('Prestation Interne Supprimée');
        this.findAll();
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }

  public findAll() {
    this.http.get<Array<PrestationInterne>>(this.url).subscribe(
      data => {
        this._foundedPrestationInternes = data.reverse();
        console.log('Prestations Internes data: ' + data.length);
      }, error => {
        console.log('error in the link');
        this.toast.error('erreur du serveur merci d\' actualiser la page');
      }
    );
  }


  get foundedPrestationInternes(): PrestationInterne[] {
    return this._foundedPrestationInternes;
  }

  set foundedPrestationInternes(value: PrestationInterne[]) {
    this._foundedPrestationInternes = value;
  }
}
