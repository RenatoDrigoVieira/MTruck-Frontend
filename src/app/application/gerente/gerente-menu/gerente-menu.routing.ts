import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenteMenuComponent } from './gerente-menu.component';

const routes: Routes = [
  {
    path: '',
    component: GerenteMenuComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import(
            'src/app/application/gerente/users/user-list/user-list.module'
          ).then((m) => m.UserListModule),
      },
      {
        path: 'truck',
        loadChildren: () =>
          import(
            'src/app/application/gerente/trucks/truck-list/truck-list.module'
          ).then((m) => m.TruckModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenteRoutingModule {}
