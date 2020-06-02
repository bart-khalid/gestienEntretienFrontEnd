import {PrestationExterne} from './prestation-externee.model';

export class PresBonCommande {
  public reference: string;
  public numeroBonCommande: string;
  public dateBonCommande: Date;
  public montantC: number;
  public nomPrestataireC: string;
  public NomPrestationAssocie: string;

  // public prestationExterneC: PrestationExterne;
}
