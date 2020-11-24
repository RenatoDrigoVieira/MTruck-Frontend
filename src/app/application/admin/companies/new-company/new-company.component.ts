import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss'],
})
export class NewCompanyComponent implements OnInit {
  contratos;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private httpService: HttpService
  ) {}

  newCompanyForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required, Validators.minLength(14)]),
    sede: new FormControl('', [Validators.required]),
    contrato_id: new FormControl('', [Validators.required]),
  });

  async ngOnInit() {
    this.contratos = await this.httpService.get('contratos');
  }

  return = () => {
    this.router.navigate(['app', 'admin', 'company']);
  };

  async registerCompany() {
    try {
      await this.httpService.post(
        'empresas',
        this.newCompanyForm.getRawValue()
      );
      this.snackBar.open('Empresa cadastrada com sucesso', '', {
        duration: 5000,
      });
      this.return();
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }
}
