import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companies;
  contratos;
  displayedColumns: string[] = ['Nome', 'CNPJ', 'Sede', 'Contrato', 'Actions'];

  constructor(
    private router: Router,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.contratos = await this.httpService.get('contratos');
    this.companies = await this.httpService.get(`empresas`);
  }

  newCompany = () => {
    this.router.navigate(['app', 'admin', 'company', 'new-company']);
  };

  editCompany(companyId) {
    this.router.navigate(['app', 'admin', 'company', companyId]);
  }
  async deleteCompany(companyId) {
    try {
      await this.httpService.delete(`empresas/${companyId}`);
      const index = this.companies.findIndex(
        (company) => company.id === companyId
      );
      this.companies.splice(index, 1);
      this.cdr.detectChanges();
      this.snackBar.open('Empresa excluida com sucesso', '', {
        duration: 5000,
      });
    } catch {
      this.snackBar.open('Ocorreu um erro', '', {
        duration: 5000,
      });
    }
  }
  companyGerentes(companyId) {
    this.router.navigate(['app', 'admin', 'company', companyId, 'gerentes']);
  }

  findContract = (id) =>
    this.contratos?.find((contrato) => contrato.id === id)?.tipo;
}
