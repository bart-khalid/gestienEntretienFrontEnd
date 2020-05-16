import {PresBonCommande} from './pres-bon-commande.model';
import {PresBonLivraison} from './pres-bon-livraison.model';

export class PrestationExterne {
 public referenceE: string;
 public typeEntretienE: string;
 public dateE: Date;
 public reclamedE: boolean;
 public referenceReclamationE: string;
 public nomPrestataireE: string;
 public montantFacE: number;
 public numeroFacE: string;
 public bonCommandeE: boolean;
 public bonLivraisonE: boolean;
 public presBonCommandeE = new PresBonCommande();
 public presBonLivraisonE = new PresBonLivraison();
}
