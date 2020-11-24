import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGerenteComponent } from './edit-gerente.component';

const routes: Routes = [
  {
    path: '',
    component: EditGerenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGerenteRouting {}
