import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FoodComponent } from './food/food.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { canActiveGuard } from './can-active.guard';
import { LoginComponent } from './login/login.component';
import { candeacivateGuard } from './candeacivate.guard';

//http://localhost:4200/home

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  }, {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'contactus', component: ContactusComponent
  },
  {
    path: 'food', component: FoodComponent
  },
  {
    path: 'fooddetails/:foodID', 
    component: FooddetailsComponent,
    canActivate : [canActiveGuard],
    canDeactivate : [candeacivateGuard]
  },
  {
    path: '**', component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
