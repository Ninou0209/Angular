/* IST & CC CLOSSET Marine LENOIR Guillaume */
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-component-add',
  templateUrl: './component-add.component.html',
  styleUrls: ['./component-add.component.css']
})
export class ComponentAddComponent implements OnInit {

  car: Car = {
  brand: '',
  price: 0,
  plateNumber: ''
  };

  constructor(private carService: CarService) { }

  ngOnInit(){
  }

  create(car){
    console.log(car);
    this.carService.createCar(car);
  }

}