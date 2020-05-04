import { Component, OnInit } from '@angular/core';
import {CarService} from '../../controller/service/car.service';
import {Car} from '../../controller/model/car';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

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


  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.cars = [
      { matricule: 'Apple', type: 'automobile', marque: '40%', utilite: '$54,406.00', dateEntrerParc: null },
      { matricule: 'Appleee', type: 'bus', marque: '40', utilite: '5,406.00', dateEntrerParc: null }
      ];
    this.cols = [
      { field: 'matricule', header: 'Matricule' },
      { field: 'type', header: 'Type' },
      { field: 'marque', header: 'Marque' },
      { field: 'utilite', header: 'Utilité' },
      { field: 'dateEntrerParc', header: 'Date Achat' }
    ];
    this.type = [];
    this.type.push({label: 'Select Type', value: ''});
    this.type.push({label: 'Automobile', value: 'automobile'});
    this.type.push({label: 'Bus', value: 'bus'});
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity: 'info', summary: 'Succés', detail: 'Opération Enregistrée'});
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new Car();
    this.displayDialog = true;
    this.cancel = true;
  }

  save() {
    const cars = this.cars;
    if (this.newCar) {
      cars.push(this.car);
    } else {
      cars[this.cars.indexOf(this.selectedCar)] = this.car;
    }

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i !== index);
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
