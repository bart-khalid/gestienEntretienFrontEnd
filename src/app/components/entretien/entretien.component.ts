import { Component, OnInit } from '@angular/core';
import {Entretien} from '../../controller/model/entretien.model';
import {EntretienService} from '../../controller/service/entretien.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {
  cols: any[];
  enretiens: Entretien[];



  constructor(private entretienService: EntretienService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'numFacture', header: 'Numéro Facture' },
      { field: 'nomMateriel', header: 'Nom Matériel' },
      { field: 'prestataire', header: 'Prestataire de service' },
      { field: 'nomLocale', header: 'Nom Locale' },
      { field: 'montant', header: 'Montant' },
      { field: 'dateEntretien', header: 'Date Entretien' }
    ];
    this.find();
  }
  public find() {
    this.entretienService.findAll().subscribe(
      data => {
        this.enretiens = data.reverse();
      }
    );
  }


  public delete(entretien: Entretien) {
  this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Entretien supprimé'});
  const index = this.enretiens.indexOf(entretien);
  this.enretiens = this.enretiens.filter((val, i) => i !== index);
  this.entretienService.delete(entretien.numFacture);
  }
  }

