import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  user: User = new User();
  rptPassword: string = '';
  perfisUsuario;
  empresaId;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService,
    private store: Store
  ) {}
  passwordValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get('password').value;
    const rptPassword = control.get('rptPassword').value;
    return password === rptPassword ? null : { passwordInvalid: true };
  };

  newUserForm = new FormGroup(
    {
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rptPassword: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordValidator }
  );

  async ngOnInit() {
    this.empresaId = this.store.selectSnapshot<string>(
      (state) => state.login.empresaId
    );
    this.perfisUsuario = await this.httpService.get('usuarios/perfil');
    console.log(this.perfisUsuario);
  }

  return = (): void => {
    this.router.navigate(['app', 'gerente', 'user']);
  };

  async registerUser() {
    try {
      const user = this.newUserForm.getRawValue();
      delete user.rptPassword;
      console.log(user);

      await this.httpService.post('usuarios', {
        ...user,
        empresa_id: this.empresaId,
        perfil_id: this.perfisUsuario.find(
          (perfil) => perfil.descricao === 'Operador'
        ).id,
      });
      this.snackBar.open('Usuário cadastrado com sucesso', 'Ok', {
        panelClass: 'snackbar',
        duration: 6000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.return();
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }
}
