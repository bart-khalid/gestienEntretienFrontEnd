import {PresBonCommande} from './pres-bon-commande.model';
import {PresBonLivraison} from './pres-bon-livraison.model';
import {Local} from './local.model';
import {Localdetail} from './localdetail.model';
import {Reclamation} from './reclamation.model';

export class PrestationExterne {
 public referenceE: string;
 public typeEntretienE: string;
 public dateE: Date;
 public reclamedE = false;


 public nomPrestataireE: string;
 public montantFacE: number;
 public numeroFacE: string;
 public bonCommandeE = false;
 public bonLivraisonE = false;
 public nomMateriel: string;
 public nomLocale: string;

 public locale = new Local();
 public materielLocale = new Localdetail();
 public reclamationE = new Reclamation();
 public presBonCommandeE = new PresBonCommande();
 public presBonLivraisonE = new PresBonLivraison();
}
