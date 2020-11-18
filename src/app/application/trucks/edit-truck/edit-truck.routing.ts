import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTruckComponent } from './edit-truck.component';

const routes: Routes = [
  {
    path: '',
    component: EditTruckComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTruckRouting {}
