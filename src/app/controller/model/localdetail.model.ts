import {Materiel} from './materiel.model';
import {Local} from './local.model';

export class Localdetail {
  referenceMT: string;
  materiellocal = new Materiel();
  localassocie = new Local();
  dateachat: Date;
}
