import { CanDeactivateFn } from '@angular/router';

export const candeacivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  let userName = localStorage.getItem("GrowtonUserName")  // "Madan"

  if (userName == "Madan") {
    return true;
  }
  else {
    alert("User is not valid");
    return false;
  }
  
  
  return true;
};
