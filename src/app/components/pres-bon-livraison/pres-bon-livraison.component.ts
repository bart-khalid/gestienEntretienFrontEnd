import { Component, OnInit } from '@angular/core';
import {PresBonLivraisonService} from '../../controller/service/pres-bon-livraison.service';
import {PresBonLivraison} from '../../controller/model/pres-bon-livraison.model';

@Component({
  selector: 'app-pres-bon-livraison',
  templateUrl: './pres-bon-livraison.component.html',
  styleUrls: ['./pres-bon-livraison.component.css']
})
export class PresBonLivraisonComponent implements OnInit {

  cols: any;
  constructor(private presBonLivraisonService: PresBonLivraisonService) { }

  ngOnInit(): void {
    this.presBonLivraisonService.findAll();
    this.cols = [
      { field: 'numeroBonLivraison', header: 'Numero Bon' },
      { field: 'dateBonLivraison', header: 'Date' },
      { field: 'nomPrestationAssocie', header: 'Préstation Associée' },
      { field: 'nomPrestataireL', header: 'Prestataire' },
      { field: 'montantL', header: 'Montant(DH)' }
    ];
  }
  delete(presBonLivraison: PresBonLivraison) {
    this.presBonLivraisonService.delete(presBonLivraison.reference);
  }
  get foundedPresBonLivraisons(): PresBonLivraison[] {
    return this.presBonLivraisonService.foundedPresBonLivraisons;
  }

}
