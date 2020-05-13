import {Login} from './login.model';
import {Local} from './local.model';

export class Reclamation {
  public reference: string;
  public date: Date;
  public objet: string;
  public description: string;
  public nomLocale = new Local();
  public nomMateriel: string;
  public reclamentName: string;
  public reclament = new Login();
  public etat: string;
}
