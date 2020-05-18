import {Materiel} from './materiel.model';
import {Local} from './local.model';
import {Reclamation} from './reclamation.model';

export class Localdetail {
  public  referenceML: string;
  public materielLocale: string;
  public localeAssocie: string;
  public  dateAffectation: Date;


  public descriptionMaterielLocale: string;

  public  materiel = new Materiel();
  public  locale = new Local();

  public reclamations = new Array<Reclamation>();
}
