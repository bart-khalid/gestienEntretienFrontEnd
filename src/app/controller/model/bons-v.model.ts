import {Car} from './car';
import {FournisseurSV} from './fournisseurSV.model';

export class BonsV {
  // vidange
  vehiculeV = new Car();
  datebonV: Date;
  descriptionV: string;
  quantiteV: number;
  prixunitaireV: number;
  totalbrutV: string;
  montantvignetteV: string;
  kilometrageV: number;
  typehuileV: string;
  fournisseurV = new FournisseurSV();
  numbonV: number;
}
