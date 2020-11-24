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
    if (userType === 'Administrador') {
      return true;
    } else if (userType === 'Gerente') {
      this.router.navigate(['app', 'gerente']);
    } else if (userType === 'Operador') {
      this.router.navigate(['app', 'operador']);
    }
  }
}
