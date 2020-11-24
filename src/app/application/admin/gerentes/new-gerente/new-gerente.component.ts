import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-new-gerente',
  templateUrl: './new-gerente.component.html',
  styleUrls: ['./new-gerente.component.scss'],
})
export class NewGerenteComponent implements OnInit {
  user: User = new User();
  rptPassword: string = '';
  perfisUsuario;
  empresaId;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService,
    private store: Store,
    private route: ActivatedRoute
  ) {}
  passwordValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get('senha').value;
    const rptPassword = control.get('rptPassword').value;
    return password === rptPassword ? null : { passwordInvalid: true };
  };

  newUserForm = new FormGroup(
    {
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      rptPassword: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordValidator }
  );

  async ngOnInit() {
    this.empresaId = this.route.snapshot.paramMap.get('companyId');
    this.perfisUsuario = await this.httpService.get('usuarios/perfil');
  }

  return = (): void => {
    this.router.navigate([
      'app',
      'admin',
      'company',
      this.empresaId,
      'gerentes',
    ]);
  };

  async registerUser() {
    try {
      const user = this.newUserForm.getRawValue();
      delete user.rptPassword;
      await this.httpService.post('usuarios', {
        ...user,
        empresa_id: this.empresaId,
        perfil_id: this.perfisUsuario.find(
          (perfil) => perfil.descricao === 'Gerente'
        ).id,
      });
      this.snackBar.open('Gerente cadastrado com sucesso', 'Ok', {
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
