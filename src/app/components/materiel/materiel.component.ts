import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../controller/service/reclamation.service';
import {Materiel} from '../../controller/model/materiel.model';
import {MessageService} from 'primeng';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MaterielService} from '../../controller/service/materiel.service';
import {FournisseurSVService} from '../../controller/service/fournisseur-sv.service';
import {FournisseurSV} from '../../controller/model/fournisseurSV.model';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;


  materiel = new Materiel();
  materiels = new Array<Materiel>();

  materielsfiltre = new Array<Materiel>();


  selectedMatereil: Materiel;

  newMateriel: boolean;

  userform: FormGroup;


  cols: any[];

  fournisseurs = new Array<FournisseurSV>();
  fournisseursfiltre = new Array<FournisseurSV>();

  types: Array<any>;
  constructor(private fb: FormBuilder,
              private materielService: MaterielService,
              private messageService: MessageService,
              private fournisseurService: FournisseurSVService,
              private reclamationService: ReclamationService) { }

  ngOnInit() {
    this.materielService.findAll();
    this.userform = this.fb.group({
      nom: new FormControl('', Validators.required),
      marque: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
    this.fournisseurService.find().subscribe(
      data => {
        for (const f of data) {
          if (f.typef === 'matériel') {
            this.fournisseursfiltre.push(f);
          }
        }
        this.fournisseurs = this.fournisseursfiltre;
        console.log(this.fournisseurs.length + 'data');
      }
    );
    this.cols = [
      { field: 'nom', header: 'Nom Matériel' },
      { field: 'marque', header: 'Fournisseur Matériel' },
      { field: 'type', header: 'Type Matériel' },
      { field: 'nbrEntite', header: 'Nombre d\'entités affectés aux locaux ' }
    ];
    this.types = [
      { value: '', label: 'Choisissez un Type' },
      { value: 'Informatique', label: 'Informatique ' },
      { value: 'Enseignement', label: 'Enseignement ' }
    ];
  }
  showDialogToAdd() {
    this.newMateriel = true;
    this.materiel = new Materiel();
    this.displayDialog = true;
    this.cancel = true;
  }
  save() {
    const materiels = this.materielService.foundedMateriels;
    if (this.newMateriel) {
      materiels.push(this.materiel);
      this.materielService.save(this.materiel);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Matériel Enregistré'});
    } else {
      materiels[this.materielService.foundedMateriels.indexOf(this.selectedMatereil)] = this.materiel;
      this.materielService.update(this.materiel);
      this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Matériel Modifié'});
    }
    this.materielService.foundedMateriels = materiels;
    this.materiel = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.materielService.foundedMateriels.indexOf(this.selectedMatereil);
    this.materielService.foundedMateriels = this.materielService.foundedMateriels.filter((val, i) => i !== index);
    this.materielService.delete(this.selectedMatereil.reference);
    this.materiel = null;
    this.displayDialog = false;
    this.messageService.add({severity: 'warn', summary: 'Succée', detail: 'Materiel Supprimé'});
  }

  onRowSelect(event) {
    this.newMateriel = false;
    this.materiel = this.cloneMatereil(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneMatereil(m: Materiel): Materiel {
    const materiel = new Materiel();
    for (const prop in m) {
      materiel[prop] = m[prop];
    }
    return materiel;
  }

  get foundedFournisseurs() {
    return this.fournisseurService.foundedFourniseurs;
  }
  get foundedMateriels() {
    return this.materielService.foundedMateriels;
  }
}
