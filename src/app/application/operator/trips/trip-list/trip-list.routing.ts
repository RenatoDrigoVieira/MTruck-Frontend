import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list.component';

const routes: Routes = [
  {
    path: '',
    component: TripListComponent,
  },
  {
    path: 'new-trip',
    loadChildren: () =>
      import('src/app/application/operator/trips/new-trip/new-trip.module').then(
        (m) => m.NewTripModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripRoutingModule {}
