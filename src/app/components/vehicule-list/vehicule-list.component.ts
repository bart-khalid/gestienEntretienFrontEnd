import { Component, OnInit } from '@angular/core';
import {CarService} from '../../controller/service/car.service';
import {Car} from '../../controller/model/car';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;
  submitted: boolean;
  car: Car = new Car();

  selectedCar: Car;

  newCar: boolean;

  cars = new Array<Car>();

  cols: any[];

  type: SelectItem[];

  errors: number;

  userform: FormGroup;
  typeuser = localStorage.getItem('type');

  constructor(private fb: FormBuilder, private messageService: MessageService, private carService: CarService,
              private confirmationService: ConfirmationService) { }

  confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment effectuer cette action?',
      accept: () => {
        this.delete();
      }
    });
  }
  ngOnInit() {
    if (this.typeuser === 'normal' ) {
      window.location.href = 'http://localhost:4200/accueil';
    } else {
      this.userform = this.fb.group({
        matricule: new FormControl('', Validators.required),
        marque: new FormControl('', Validators.required),
        dateachat: new FormControl('', Validators.required),
        utilite: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      });

      this.cols = [
        { field: 'reference', header: 'Référence' },
        { field: 'matricule', header: 'Matricule' },
        { field: 'type', header: 'Type' },
        { field: 'marque', header: 'Marque' },
        { field: 'utilite', header: 'Utilité' },
        { field: 'dateEntrerParc', header: 'Date affectation au parc' }
      ];
      this.type = [];
      this.type.push({label: 'Choisir un Type', value: ''});
      this.type.push({label: 'Automobile', value: 'Automobile'});
      this.type.push({label: 'Bus', value: 'Bus'});

      this.find();
    }
  }

  public find() {
    this.carService.findAll().subscribe(
      data => {
        this.cars = data.reverse();
      },
      error => {
        console.log('error find');
      });
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new Car();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const car = this.cars;
    if (this.newCar) {
      this.carService.save(this.car).subscribe(
        data => {
          console.log(data);
          this.errors = data;
          if (this.errors === 1) {
            this.messageService.add({severity: 'success', summary: 'Succés', detail: 'Opération Enregistrée'});
            this.find();
            this.car = null;
            this.displayDialog = false;
          } else if (this.errors === -1){
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Matricule déja existe'});
          }
        }, error => {
          console.log('error');
        }
      );
    } else {
      //  use[this.users.indexOf(this.selectedUser)] = this.user;
      car[this.cars.indexOf(this.selectedCar)] = this.car;
      this.carService.update(this.car).subscribe(
        data => {
          console.log(data);
          this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
          this.find();
          this.car = null;
          this.displayDialog = false;
        }, error => {
          console.log('error update');
        }
      );
    }
  }

  delete() {
    const index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i !== index);
    this.carService.delete(this.selectedCar.reference).subscribe(
      data => {
        this.messageService.add({severity: 'warn', summary: 'Succés', detail: 'Véhicule Supprimé'});
      },
      error => {
        console.log('error delete');
      }
    );
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
    this.cancel = false;
  }

  cloneCar(c: Car): Car {
    const car = new Car();
    for (const prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
}
