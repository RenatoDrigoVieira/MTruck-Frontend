import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckListComponent } from './truck-list.component';

const routes: Routes = [
  {
    path: '',
    component: TruckListComponent,
  },
  {
    path: 'new-truck',
    loadChildren: () =>
      import(
        'src/app/application/gerente/trucks/new-truck/new-truck.module'
      ).then((m) => m.NewTruckModule),
  },
  {
    path: ':truckId',
    loadChildren: () =>
      import(
        'src/app/application/gerente/trucks/edit-truck/edit-truck.module'
      ).then((m) => m.EditTruckModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruckRoutingModule {}
