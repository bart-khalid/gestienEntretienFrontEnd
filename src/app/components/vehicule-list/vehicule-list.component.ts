import { Component, OnInit } from '@angular/core';
import {CarService} from '../../controller/service/car.service';
import {Car} from '../../controller/model/car';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {
  value: boolean;
  cancel: boolean;
  displayDialog: boolean;

  car: Car = new Car();

  selectedCar: Car;

  newCar: boolean;

  cars = new Array<Car>();

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new Car();
    this.displayDialog = true;
    this.cancel= true;
  }

  save() {
    const cars = this.cars;
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

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
    this.cancel=false;
  }

  cloneCar(c: Car): Car {
    const car = new Car();
    for(const prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
}
