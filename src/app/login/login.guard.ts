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
export class LoginGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): boolean {
    const isLogged = this.store.selectSnapshot<string>(
      (state) => state.login.logged
    );
    if (isLogged) {
      return true;
    }
    this.router.navigate(['']);
  }
}
