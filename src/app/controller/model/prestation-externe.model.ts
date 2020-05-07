import {PresBonCommande} from './pres-bon-commande.model';
import {PresBonLivraison} from './pres-bon-livraison.model';

export class PrestationExterne{
 public reference: string;
 public typeEntretien: string;
 public date: Date;
 public reclamed: boolean;
 public referenceReclamation: string;
 public nomPrestataire: string;
 public montantFac: number;
 public numeroFac: string;
 public bonCommande: boolean;
 public bonLivraison: boolean;
 public presBonCommande = new PresBonCommande();
 public presBonLivraison = new PresBonLivraison();
}
