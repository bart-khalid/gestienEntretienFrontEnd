import {BonsC} from './bons-c.model';
import {BonsR} from './bons-r.model';
import {BonsV} from './bons-v.model';

export class FournisseurSV {
  public nomf: string;
  public emailf: string;
  public adressef: string;
  public telephonef: string;
  public bonsCarburant = new Array<BonsC>();
  public bonsReparation = new Array<BonsR>();
  public bonsVidange = new Array<BonsV>();
}
