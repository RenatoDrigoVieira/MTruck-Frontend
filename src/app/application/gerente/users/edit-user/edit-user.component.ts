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
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  perfisUsuario;
  empresaId;
  userId;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  editUserForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  async ngOnInit() {
    this.empresaId = this.store.selectSnapshot<string>(
      (state) => state.login.empresaId
    );
    this.perfisUsuario = await this.httpService.get('usuarios/perfil');
    console.log(this.perfisUsuario);

    this.userId = this.route.snapshot.paramMap.get('userId');
    this.editUserForm.patchValue(
      await this.httpService.get(`usuarios/${this.userId}`)
    );
  }

  return = (): void => {
    this.router.navigate(['app', 'gerente', 'user']);
  };

  async editUser() {
    try {
      const user = this.editUserForm.getRawValue();
      await this.httpService.patch(`usuarios/${this.userId}`, {
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
