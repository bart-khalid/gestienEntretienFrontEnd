import {Localdetail} from './localdetail.model';
import {PrestationInterne} from './prestation-interne.model';
import {PrestationExterne} from './prestation-externee.model';

export class Local {
  reference: string;
  nomLocal: string;
  typeLocal: string;
  departement: string;
  nbrMateriel: number;

  public localDetails = new Array<Localdetail>();
  public prestationI = new Array<PrestationInterne>();
  public prestationE = new Array<PrestationExterne>();
}
