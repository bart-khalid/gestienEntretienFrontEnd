import {Agent} from './agent.model';
import {Reclamation} from './reclamation.model';


export class PrestationInterne {
  public reference: string;
  public typeEntretien: string;
  public date: Date;
  public reclamed: boolean;
  public referenceReclamation: string;
  public nomAgent: string;
  public Reclamation = new Reclamation();

  public Agent = new Agent();

}
