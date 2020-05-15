import {Car} from './car';
import {FournisseurSV} from './fournisseur.model';

export class BonsR {
  // reparation
  vehiculeR = new Car();
  datebonR: Date;
  descriptionR: number;
  quantiteR: number;
  prixunitaireR: number;
  totalbrutR: string;
  montantvignetteR: string;
  fournisseurR = new FournisseurSV();
  numbonR: number;
}
