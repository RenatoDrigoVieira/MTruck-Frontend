import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenteListComponent } from './gerente-list.component';

const routes: Routes = [
  {
    path: '',
    component: GerenteListComponent,
  },
  {
    path: 'new-user',
    loadChildren: () =>
      import(
        'src/app/application/admin/gerentes/new-gerente/new-gerente.module'
      ).then((m) => m.NewGerenteModule),
  },
  {
    path: ':userId',
    loadChildren: () =>
      import(
        'src/app/application/admin/gerentes/edit-gerente/edit-gerente.module'
      ).then((m) => m.EditGerenteModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenteRoutingModule {}
