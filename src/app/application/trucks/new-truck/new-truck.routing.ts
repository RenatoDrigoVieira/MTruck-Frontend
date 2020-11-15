import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTruckComponent } from './new-truck.component';

const routes: Routes = [
  {
    path: '',
    component: NewTruckComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTruckRouting {}
