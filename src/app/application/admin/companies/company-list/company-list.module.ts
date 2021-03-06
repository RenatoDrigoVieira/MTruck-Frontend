import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompanyListComponent } from './company-list.component';
import { CompanyRoutingModule } from './company-list.routing';
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
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatListModule,
    MatIconModule,
    ToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})
export class CompanyListModule {}
