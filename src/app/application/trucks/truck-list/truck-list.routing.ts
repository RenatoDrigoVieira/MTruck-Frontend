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
      import('src/app/application/trucks/new-truck/new-truck.module').then(
        (m) => m.NewTruckModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruckRoutingModule {}
