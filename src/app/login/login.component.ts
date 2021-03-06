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
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  ngOnInit() {}

  async login() {
    try {
      const user = await this.httpService.post(
        'usuarios/login',
        this.loginForm.getRawValue()
      );

      this.store.dispatch(new SetLogged(true));
      this.store.dispatch(
        new SetUser(user.name, user.perfil_usuario, user.empresa_id)
      );
      if (user.perfil_usuario === 'Administrador') {
        this.router.navigate(['app', 'admin']);
      } else if (user.perfil_usuario === 'Gerente') {
        this.router.navigate(['app', 'gerente']);
      } else if (user.perfil_usuario === 'Operador') {
        this.router.navigate(['app', 'operator']);
      }
    } catch {
      this.snackBar.open('Usuario não encontrado', '', {
        duration: 5000,
      });
    }
  }
}
