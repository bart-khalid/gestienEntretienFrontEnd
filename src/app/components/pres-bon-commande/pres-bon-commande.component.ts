import { Component, OnInit } from '@angular/core';
import {PresBonCommandeService} from '../../controller/service/pres-bon-commande.service';
import {PresBonCommande} from '../../controller/model/pres-bon-commande.model';
import {Reclamation} from '../../controller/model/reclamation.model';

@Component({
  selector: 'app-pres-bon-commande',
  templateUrl: './pres-bon-commande.component.html',
  styleUrls: ['./pres-bon-commande.component.css']
})
export class PresBonCommandeComponent implements OnInit {

  cols: any;
  constructor(private presBonCommandeService: PresBonCommandeService) { }

  ngOnInit(): void {
    this.presBonCommandeService.findAll();
    this.cols = [
      { field: 'numeroBonCommande', header: 'Numero Bon' },
      { field: 'dateBonCommande', header: 'Date' },
      { field: 'nomPrestationAssocie', header: 'Préstation Associée' },
      { field: 'nomPrestataireC', header: 'Prestataire' },
      { field: 'montantC', header: 'Montant' }
    ];
  }

  delete(presBonCommande: PresBonCommande) {
    this.presBonCommandeService.delete(presBonCommande.reference);
  }
  get foundedPresBonCommandes(): Array<PresBonCommande> {
    return this.presBonCommandeService.foundedPresBonCommandes;
  }
}
