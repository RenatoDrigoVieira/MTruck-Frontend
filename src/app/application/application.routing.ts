import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { ApplicationComponent } from './application.component';
import { GerenteGuard } from './gerente.guard';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('src/app/application/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'gerente',
        canActivate: [GerenteGuard],
        loadChildren: () =>
          import('src/app/application/gerente/gerente.module').then(
            (m) => m.GerenteModule
          ),
      },
      {
        path: 'operator',
        loadChildren: () =>
          import('src/app/application/operator/operator.module').then(
            m => m.OperatorModule
          )
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
