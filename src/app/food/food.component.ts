import { Component , OnInit } from '@angular/core';
import { foodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent implements OnInit {
  constructor(public foodService:foodService){

  }

  foodItems:any[] = [];

  // human being life-cycle
  //One life-cycle hook in angular
  // oninit
 //automatically executes when component gets initlized
  ngOnInit(): void {
    this.foodItems =  this.foodService.getFoodItems();
  }

}
