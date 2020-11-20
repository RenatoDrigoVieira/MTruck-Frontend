import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
})
export class EditCompanyComponent implements OnInit {
  contratos;
  companyId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private httpService: HttpService
  ) {}

  editCompanyForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    sede: new FormControl('', [Validators.required]),
    contrato_id: new FormControl('', [Validators.required]),
  });

  async ngOnInit() {
    this.contratos = await this.httpService.get('contratos');
    this.companyId = this.route.snapshot.paramMap.get('companyId');
    this.editCompanyForm.patchValue(
      await this.httpService.get(`empresas/${this.companyId}`)
    );
  }

  return = () => {
    this.router.navigate(['app', 'admin', 'company']);
  };

  async editCompany() {
    try {
      await this.httpService.patch(
        `empresas/${this.companyId}`,
        this.editCompanyForm.getRawValue()
      );
      this.snackBar.open('Empresa editada com sucesso', '', {
        duration: 5000,
      });
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }

    this.return();
  }
}
