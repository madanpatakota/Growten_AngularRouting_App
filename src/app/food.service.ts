import { Injectable } from "@angular/core";

@Injectable()
export class foodService {

    getFoodItems() {
        return [{
            foodID: 1, FoodItem: "Veg"
        },
        {
            foodID: 2, FoodItem: "non-Veg"
        }]
    }

    getFoodDetails() {
        return [{
            foodID: 1, FoodItem: "Veg" , details : "Fruits , Dosa , Idli"
        },
        {
            foodID: 2, FoodItem: "non-Veg" , details : "Fish , CB"
        }]
    }

}