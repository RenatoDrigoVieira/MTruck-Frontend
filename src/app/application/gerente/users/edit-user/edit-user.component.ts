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
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  rptPassword: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  editUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit(): void {}

  return = (): void => {
    this.router.navigate(['app', 'gerente', 'user']);
  };

  editUser() {
    this.snackBar.open('Usuário editado com sucesso', 'Ok', {
      panelClass: 'snackbar',
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });

    this.return();
  }
}
