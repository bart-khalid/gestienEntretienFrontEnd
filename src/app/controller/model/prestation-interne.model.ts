import {Agent} from './agent.model';
import {Reclamation} from './reclamation.model';


export class PrestationInterne {
  public referenceI: string;
  public typeEntretienI: string;
  public dateI: Date;
  public reclamedI: boolean;
  public referenceReclamationI: string;
  public nomAgentI: string;
  public reclamationI = new Reclamation();

  public agent = new Agent();

}
