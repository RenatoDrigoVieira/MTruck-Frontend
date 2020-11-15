import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent implements OnInit {

  user: User = new User()
  rptPassword: string = ''

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  newUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rptPassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  return(): void {

    this.router.navigate(['app', 'user'])
  }

  registerUser() {

    if (this.user.password != this.rptPassword) {

      this.snackBar.open('ERRO: Senhas não coincidem', 'Retornar', {
        panelClass: "snackbar",
        duration: 6000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      })

      return
    }

    this.snackBar.open('Usuário cadastrado com sucesso', 'Ok', {
      panelClass: "snackbar",
      duration: 6000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });

    this.return();
  }
}
