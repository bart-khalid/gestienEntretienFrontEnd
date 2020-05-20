import {Car} from './car';
import {FournisseurSV} from './fournisseurSV.model';

export class BonsC {
  // carburant
  reference: string;
  vehiculeC = new Car();
  datebonC: Date;
  descriptionC: string;
  quantiteC: number;
  prixunitaireC: number;
  totalbrutC: number;
  montantvignetteC: number;
  typeC: string;
  fournisseurC = new FournisseurSV();
  numbonC: string;
  fourniassooci: string;
  vehiculeassooci: string;
}
