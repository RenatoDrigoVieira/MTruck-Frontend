import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'company',
      },
      {

        path: 'company',
        loadChildren: () =>
          import(
            'src/app/application/companies/company-list/company-list.module'
          ).then((m) => m.CompanyListModule),
      },
      {
        
        path: 'user',
        loadChildren: () =>
          import(
            'src/app/application/users/user-list/user-list.module'
          ).then((m) => m.UserListModule),
      },
      {
        path: 'truck',
        loadChildren: () =>
          import(
            'src/app/application/trucks/truck-list/truck-list.module'
          ).then((m) => m.TruckModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule { }
