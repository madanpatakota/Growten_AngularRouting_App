import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { foodService } from '../food.service';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrl: './fooddetails.component.css'
})
export class FooddetailsComponent implements OnInit {

  constructor(public activateRoute:ActivatedRoute , public fs : foodService){

  }

  fooddetails:any[] = [];

  foodDetailByID = "";
  foodType = "";

  // obj = {
  //   name : "john",
  //   food : "Veg"
  // }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((param:any)=>{
       console.log(param);  // { foodID : "2"}   +"2"    ---> 2

       this.fooddetails = this.fs.getFoodDetails(); // food details

        //{ 
         //  foodID: 1,
        //  FoodItem: 'Veg',
        //  details: 'Fruits , Dosa , Idli'
        //}

        //  obj = {
        //   name : "john",
        //   food : "Veg"
        // }

        // john  --> obj.name
        // 2 records

       let test = this.fooddetails.find((item:any)=>item.foodID == +param.foodID); 
       console.log(test.details);
       this.foodDetailByID = test.details;
       this.foodType       = test.FoodItem;

       //filter or //find

    })

    // subscribe the params // then i will receive the params realted notificaiton or info or news
    
  }
   

}
