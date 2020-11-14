import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';
import { NewUserComponent } from './users/new-user/new-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserListComponent } from './users/user-list/user-list.component';

@NgModule({
  declarations: [ApplicationComponent, NewUserComponent, EditUserComponent, UserListComponent],
  imports: [ApplicationRoutingModule],
})
export class ApplicationModule {}
