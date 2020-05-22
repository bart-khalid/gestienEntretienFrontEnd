import {Materiel} from './materiel.model';
import {Local} from './local.model';

export class Entretien {
  public dateEntretien: string;
  public nomMateriel: string;
  public prestataire: string;
  public montant: number;
  public numFacture: string;
  public nomLocale: string;

  public materiel = new  Materiel();
  public locale = new Local();
}
