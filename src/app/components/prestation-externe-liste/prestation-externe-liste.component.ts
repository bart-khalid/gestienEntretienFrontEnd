import { Component, OnInit } from '@angular/core';
import {PrestationExterne} from '../../controller/model/prestation-Externe.model';
import {ReclamationService} from '../../controller/service/reclamation.service';

@Component({
  selector: 'app-prestation-externe-liste',
  templateUrl: './prestation-externe-liste.component.html',
  styleUrls: ['./prestation-externe-liste.component.css']
})
export class PrestationExterneListeComponent implements OnInit {

  constructor(private reclamationService: ReclamationService) { }


  ngOnInit() {
  }
}
