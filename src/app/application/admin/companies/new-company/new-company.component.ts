import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss'],
})

export class NewCompanyComponent implements OnInit {
  contratos = ['Contrato A', 'Contrato B', 'Contrato C'];

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  newCompanyForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    sede: new FormControl('', [Validators.required]),
    contrato: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    console.log('aaaaaaaaaa');
  }

  return() {
    this.router.navigate(['app', 'company']);
  }

  registerCompany() {
    this.snackBar.open('Empresa cadastrada com sucesso', '', {
      duration: 5000,
    });

    this.return();
  }
}
