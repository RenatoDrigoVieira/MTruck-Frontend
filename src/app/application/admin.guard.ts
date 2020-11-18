import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  Router,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): boolean {
    const userType = this.store.selectSnapshot<string>(
      (state) => state.login.userType
    );
    if (userType === 'admin') {
      return true;
    } else if (userType === 'gerente') {
      this.router.navigate(['app', 'gerente']);
    } else if (userType === 'operador') {
      this.router.navigate(['app', 'operador']);
    }
  }
}
