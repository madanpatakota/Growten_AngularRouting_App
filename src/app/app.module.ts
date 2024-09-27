import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FoodComponent } from './food/food.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { foodService } from './food.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NotfoundComponent,
    FoodComponent,
    FooddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [foodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
