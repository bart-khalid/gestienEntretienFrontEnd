import {FournisseurSV} from './fournisseur.model';
import {FournisseurSVService} from '../service/fournisseur-sv.service';
import DateTimeFormat = Intl.DateTimeFormat;

export class Materiel {
public reference: string;
public marque: string;
public nom: string;

public dateAchat: Date;
public nbrEntite: number;
public type: string;
public fournisseur = new FournisseurSV();
}
