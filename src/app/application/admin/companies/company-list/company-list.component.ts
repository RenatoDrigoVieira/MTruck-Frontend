import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private httpService: HttpService) {}

  async ngOnInit() {
    this.companies = await this.httpService.get(`empresas`);
  }

  newCompany = () => {
    this.router.navigate(['app', 'admin', 'company', 'new-company']);
  };

  editCompany(companyId) {
    this.router.navigate(['app', 'admin', 'company', companyId]);
  }
}
