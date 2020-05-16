import {Car} from "./car";
import {FournisseurSV} from "./fournisseurSV.model";

export class BonsC {
  // carburant
  vehiculeC = new Car();
  datebonC: Date;
  descriptionC: string;
  quantiteC: number;
  prixunitaireC: number;
  totalbrutC: string;
  montantvignetteC: string;
  typeC: string;
  fournisseurC = new FournisseurSV();
  numbonC: number;
}
