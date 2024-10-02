import { CanActivateFn } from '@angular/router';

export const canActiveGuard: CanActivateFn = (route, state) => {

  // what canActiveGuard has to do?

  let userName = localStorage.getItem("GrowtonUserName")  // "Madan"

  if (userName == "Madan") {
    return true;
  }
  else {
    alert("User is not valid. Please use the code  :Madan");
    return false;
  }


};
