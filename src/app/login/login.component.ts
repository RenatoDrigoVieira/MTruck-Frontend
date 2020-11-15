import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from '../services/http-service';
import { SetLogged, SetUser } from '../store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });

  ngOnInit() {}

  async login() {
    try {
      const user = await this.httpService.post(
        'usuarios/login',
        this.loginForm.getRawValue()
      );
      console.log(user);
      this.store.dispatch(new SetLogged(true));
      this.store.dispatch(new SetUser(user.name, user.perfil_id));
      if (user.perfil_id === 'administrador') {
        this.router.navigate(['app', 'company']);
      } else if (user.perfil_id === 'gerente') {
        this.router.navigate(['app', 'truck']);
      } else if (user.perfil_id === 'operador') {
      }
    } catch {
      this.snackBar.open('Usuario não encontrado', '', {
        duration: 5000,
      });
    }
  }
}
