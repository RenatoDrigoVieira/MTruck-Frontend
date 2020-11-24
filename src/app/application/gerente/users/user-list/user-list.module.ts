import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { UserRoutingModule } from './user-list.routing';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from 'src/app/application/common/toolbar/toolbar.module';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatListModule,
    MatIconModule,
    ToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})
export class UserListModule {}
