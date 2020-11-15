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
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  user: User = new User();
  rptPassword: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar) {}
  passwordValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get('password').value;
    const rptPassword = control.get('rptPassword').value;
    return password === rptPassword ? null : { passwordInvalid: true };
  };

  newUserForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rptPassword: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordValidator }
  );

  ngOnInit(): void {}

  return(): void {
    this.router.navigate(['app', 'user']);
  }

  registerUser() {
    this.snackBar.open('Usuário cadastrado com sucesso', 'Ok', {
      panelClass: 'snackbar',
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });

    this.return();
  }
}
