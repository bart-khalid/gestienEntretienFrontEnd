import {Login} from './login.model';
import {Local} from './local.model';
import {Materiel} from './materiel.model';
import {Users} from './users.model';
import {Localdetail} from './localdetail.model';

export class Reclamation {
  public reference: string;
  public date: Date;
  public objet: string;
  public description: string;
  public nomLocale: string;
  public nomMateriel: string;
  public reclamentName: string;
  public etat: string;

  public descreptionDropDownReclamation: string;

  public materiel = new Localdetail();
  public locale = new Local();
  public reclament = new Users();
}
