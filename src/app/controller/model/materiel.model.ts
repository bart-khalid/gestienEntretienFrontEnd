import {FournisseurSV} from './fournisseurSV.model';
import {Localdetail} from './localdetail.model';


export class Materiel {
public reference: string;
public marque: string;
public nom: string;
public nbrEntite: number;
public type: string;

public descriptionDropDown: string;

public fournisseur = new FournisseurSV();
public localDetails = new Array<Localdetail>();
}
