import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean {
    if (sessionStorage && sessionStorage.getItem('loggedInUser') && sessionStorage.getItem('loggedInUser') != null) {
      return true;
    }

    // navigate to login page
    this.router.navigate(['/login']);
    return false;
  }
}
