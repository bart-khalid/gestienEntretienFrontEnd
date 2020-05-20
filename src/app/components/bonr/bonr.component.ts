import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng';
import {BonsR} from '../../controller/model/bons-r.model';
import {MessageService} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BonrService} from '../../controller/service/bonr.service';
import {CarService} from "../../controller/service/car.service";
import {FournisseurSVService} from "../../controller/service/fournisseur-sv.service";
import {FournisseurSV} from "../../controller/model/fournisseurSV.model";
import {Car} from "../../controller/model/car";

@Component({
  selector: 'app-bonr',
  templateUrl: './bonr.component.html',
  styleUrls: ['./bonr.component.css']
})
export class BonrComponent implements OnInit {
  userform: FormGroup;
  typebon: SelectItem[];
  typeselecte: string;
  colsR: any[];
  cancelR: boolean;
  displayDialogR: boolean;
  bonR = new BonsR();
  selectedBonR: BonsR;
  newbonR: boolean;
  bonsR = new Array<BonsR>();
  fourniss: SelectItem[];
  vehicule: SelectItem[];
  errorc: number;
  fournisseurs: FournisseurSV[];
  cars: Car[];

  constructor(private fb: FormBuilder, private messageService: MessageService, private bonrService: BonrService,
              private carService: CarService , private fournisseurSVService: FournisseurSVService) { }

  ngOnInit(): void {
    this.userform = this.fb.group({
      numbonR: new FormControl('', Validators.required),
      vehiculeR: new FormControl('', Validators.required),
      fournisseurR: new FormControl('', Validators.required),
      descriptionR: new FormControl('', Validators.required),
      prixunitaireR: new FormControl('', Validators.required),
      quantiteR: new FormControl('', Validators.required),
      datebonR: new FormControl('', Validators.required),
      totalbrutR: new FormControl('', Validators.required),
      montantvignetteR: new FormControl('', Validators.required),
    });
    this.colsR = [
      {field: 'numbonR', header: 'Numero de Bon'},
      {field: 'vehiculeassooci', header: 'Matricule Véhicule'},
      {field: 'fourniassooci', header: 'Fournisseur'},
      {field: 'descriptionR', header: 'Désignation'},
      {field: 'prixunitaireR', header: 'Prix Unitaire'},
      {field: 'quantiteR', header: 'Quantité'},
      {field: 'datebonR', header: 'Date Bon'},
      {field: 'totalbrutR', header: 'Total Brut'},
      {field: 'montantvignetteR', header: 'Montant Vignette'}
    ];
    this.vehicule = [
      {label: 'Selectionnez une véhicule', value: ''},
      {label: 'V1', value: 'v1'},
      {label: 'V2', value: 'v2'},
      {label: 'V3', value: 'v3'}
    ];

    this.fourniss = [
      {label: 'Selectionnez un fournisseur', value: ''},
      {label: 'fournisseur 1', value: 'f1'},
      {label: 'fournisseur 2', value: 'f2'},
      {label: 'fournisseur 3', value: 'f3'}
    ];
    this.find();
    this.fournisseurSVService.find().subscribe(
      data => {
        this.fournisseurs = data;
      }
    );
    this.carService.findAll().subscribe(
      data => {
        this.cars = data;
      }
    );
  }

  public find() {
    this.bonrService.findAll().subscribe(
      data => {
        this.bonsR = data.reverse();
      },
      error => {
        console.log('error find');
      });
  }
  showDialogToAddR() {
    this.newbonR = true;
    this.bonR = new BonsR();
    this.displayDialogR = true;
    this.cancelR = true;
  }
  saveR() {
    const bonr = this.bonsR;
    if (this.newbonR) {
      this.bonrService.save(this.bonR).subscribe(
        data => {
          console.log(data);
          this.errorc = data;
          if (this.errorc === 1) {
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
            this.find();
            this.bonR = null;
            this.displayDialogR = false;
          } else if (this.errorc === -1){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Numéro de bon déja existe'});
          }
        }, error => {
          console.log('error');
        }
      );
    } else {
      //  use[this.users.indexOf(this.selectedUser)] = this.user;
      bonr[this.bonsR.indexOf(this.selectedBonR)] = this.bonR;
      this.bonrService.update(this.bonR).subscribe(
        data => {
          console.log(data);
          this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
          this.find();
          this.bonR = null;
          this.displayDialogR = false;
        }, error => {
          console.log('error update');
        }
      );
    }
  }
  deleteR() {
    const index = this.bonsR.indexOf(this.selectedBonR);
    this.bonsR = this.bonsR.filter((val, i) => i !== index);
    this.bonrService.delete(this.selectedBonR.reference).subscribe(
      data => {
        this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Bon Réparation Supprimé'});
      },
      error => {
        console.log('error delete');
      }
    );
    this.bonR = null;
    this.displayDialogR = false;
  }
  cloneBonR(b: BonsR): BonsR {
    const bon = new BonsR();
    for (const prop in b) {
      bon[prop] = b[prop];
    }
    return bon;
  }

  onRowSelectR(event) {
    this.newbonR = false;
    this.bonR = this.cloneBonR(event.data);
    this.displayDialogR = true;
    this.cancelR = false;
  }
}
