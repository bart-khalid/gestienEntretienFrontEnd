import {Car} from './car';
import {FournisseurSV} from './fournisseurSV.model';

export class BonsR {
  // reparation
  vehiculeR = new Car();
  datebonR: Date;
  descriptionR: number;
  quantiteR: number;
  prixunitaireR: number;
  totalbrutR: number;
  montantvignetteR: number;
  fournisseurR = new FournisseurSV();
  numbonR: number;
}
