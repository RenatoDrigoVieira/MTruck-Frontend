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
  selector: 'app-edit-gerente',
  templateUrl: './edit-gerente.component.html',
  styleUrls: ['./edit-gerente.component.scss'],
})
export class EditGerenteComponent implements OnInit {
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
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  async ngOnInit() {
    this.empresaId = this.route.snapshot.paramMap.get('companyId');
    this.perfisUsuario = await this.httpService.get('usuarios/perfil');

    this.userId = this.route.snapshot.paramMap.get('userId');
    this.editUserForm.patchValue(
      await this.httpService.get(`usuarios/${this.userId}`)
    );
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

  async editUser() {
    try {
      const user = this.editUserForm.getRawValue();
      await this.httpService.patch(`usuarios/${this.userId}`, {
        ...user,
        empresa_id: this.empresaId,
        perfil_id: this.perfisUsuario.find(
          (perfil) => perfil.descricao === 'Gerente'
        ).id,
      });
      this.snackBar.open('Gerente editado com sucesso', 'Ok', {
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
