import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGerenteComponent } from './new-gerente.component';

const routes: Routes = [
  {
    path: '',
    component: NewGerenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGerenteRouting {}
