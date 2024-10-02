import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public router : Router ){}

  @ViewChild('userName') _userName:ElementRef;
  evtLogin(){
     localStorage.
         setItem("GrowtonUserName",this._userName.nativeElement.value) ;

      this.router.navigate(['home']);


  }

}
