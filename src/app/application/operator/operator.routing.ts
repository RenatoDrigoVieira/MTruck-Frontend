import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorComponent } from './operator.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'trips'
      },
      {
        path: 'trips',
        loadChildren: () =>
          import(
            'src/app/application/operator/trips/trip-list/trip-list.module'
          ).then((m) => m.TripListModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorRoutingModule {}
