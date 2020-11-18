import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
})
export class EditCompanyComponent implements OnInit {
  contratos = ['Contrato A', 'Contrato B', 'Contrato C'];

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  editCompanyForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    sede: new FormControl('', [Validators.required]),
    contrato: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    console.log('aaaaaaaaaa');
  }

  return = () => {
    this.router.navigate(['app', 'admin', 'company']);
  };

  editCompany() {
    this.snackBar.open('Empresa editada com sucesso', '', {
      duration: 5000,
    });

    this.return();
  }
}
