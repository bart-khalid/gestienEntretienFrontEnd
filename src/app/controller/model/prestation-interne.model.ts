import {Agent} from './agent.model';
import {Reclamation} from './reclamation.model';
import {Local} from './local.model';
import {Localdetail} from './localdetail.model';


export class PrestationInterne {
  public referenceI: string;
  public typeEntretienI: string;
  public dateI: Date;
  public reclamedI = false;
  public referenceReclamationI: string;
  public nomAgentI: string;
  public nomLocaleI: string;
  public nomMaterielI: string;

  public reclamationI = new Reclamation();

  public agent = new Agent();
  public locale = new Local();
  public materielLocale = new Localdetail();

}
