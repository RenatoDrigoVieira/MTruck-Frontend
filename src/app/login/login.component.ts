import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetLogged, SetUserType } from '../store/login.actions';
import { LoginState } from '../store/login.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit() {}

  login() {
    this.store.dispatch(new SetLogged(true));
    this.store.dispatch(new SetUserType('regular'));
    this.router.navigate(['app']);
  }
}
