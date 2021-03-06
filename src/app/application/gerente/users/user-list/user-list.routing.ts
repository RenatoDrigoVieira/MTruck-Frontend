import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'new-user',
    loadChildren: () =>
      import('src/app/application/gerente/users/new-user/new-user.module').then(
        (m) => m.NewUserModule
      ),
  },
  {
    path: ':userId',
    loadChildren: () =>
      import(
        'src/app/application/gerente/users/edit-user/edit-user.module'
      ).then((m) => m.EditUserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
