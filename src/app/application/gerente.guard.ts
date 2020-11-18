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
export class GerenteGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): boolean {
    const userType = this.store.selectSnapshot<string>(
      (state) => state.login.userType
    );
    if (userType === 'gerente') {
      return true;
    } else if (userType === 'admin') {
      this.router.navigate(['app', 'admin']);
    } else if (userType === 'operador') {
      this.router.navigate(['app', 'operador']);
    }
  }
}
