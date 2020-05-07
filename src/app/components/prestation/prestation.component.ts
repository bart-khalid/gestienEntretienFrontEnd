import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {Reclamation} from '../../controller/model/reclamation.model';
import {PrestationInterne} from '../../controller/model/prestation-interne.model';
import {MessageService} from 'primeng';
import {PrestationExterne} from '../../controller/model/prestation-externe.model';


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css']
})
export class PrestationComponent implements OnInit {

  cols: any[];
  entretiens: any[];

  public displayDialog: boolean;
  public displayDialogE: boolean;
  public newPresInterne: boolean;
  public newPresExterne: boolean;



  public prestataionInterne = new PrestationInterne();
  public prestataionExterne = new PrestationExterne();

  constructor(private reclamationService: ReclamationService, private messageService: MessageService ) { }

  ngOnInit(): void {
    this.reclamationService.findAll();
    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'reclamentName', header: 'Reclament' },
      { field: 'objet', header: 'Objet' },
      { field: 'etat', header: 'Etat' }
    ];
    this.entretiens = [
      { value: 'jardinage', label: 'Jardinage' }
    ];
  }

  showDialogToAdd() {
    this.newPresInterne = true;
    this.prestataionInterne = new PrestationInterne();
    this.displayDialog = true;
  }
  showDialogToAddE() {
    this.newPresExterne = true;
    this.prestataionExterne = new PrestationExterne();
    this.displayDialogE = true;
  }
  save() {
    if (this.newPresInterne) {
      this.prestataionInterne = null;
    } else if (this.newPresExterne){
      this.prestataionExterne = null;
    }
    this.displayDialog = false;
    this.displayDialogE = false;
    this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Réussie'});
  }
  get foundedReclamations(): Reclamation[] {
    return this.reclamationService.reclamationsFounded;
  }

}
