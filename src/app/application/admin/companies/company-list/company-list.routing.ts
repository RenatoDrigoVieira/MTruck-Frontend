import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent,
  },
  {
    path: 'new-company',
    loadChildren: () =>
      import(
        'src/app/application/admin/companies/new-company/new-company.module'
      ).then((m) => m.NewCompanyModule),
  },
  {
    path: ':companyId',
    loadChildren: () =>
      import(
        'src/app/application/admin/companies/edit-company/edit-company.module'
      ).then((m) => m.EditCompanyModule),
  },
  {
    path: ':companyId/gerentes',
    loadChildren: () =>
      import(
        'src/app/application/admin/gerentes/gerente-list/gerente-list.module'
      ).then((m) => m.GerenteListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
