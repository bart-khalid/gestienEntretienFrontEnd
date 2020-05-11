import {FournisseurSV} from './fournisseur.model';


export class Materiel {
public reference: string;
public marque: string;
public nom: string;

public nbrEntite: number;
public type: string;
public fournisseur = new FournisseurSV();
}
