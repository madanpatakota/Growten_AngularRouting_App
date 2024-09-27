import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('userName') _userName:ElementRef;
  evtLogin(){
     localStorage.
         setItem("GrowtonUserName",this._userName.nativeElement.value) ;
        
     
  }

}
