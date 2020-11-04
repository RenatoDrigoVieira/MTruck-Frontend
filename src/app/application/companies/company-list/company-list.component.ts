import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companies = ['Empresa A', 'Empresa B', 'Empresa C'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  newCompany() {
    this.router.navigate(['app', 'company', 'new-company']);
  }
}
