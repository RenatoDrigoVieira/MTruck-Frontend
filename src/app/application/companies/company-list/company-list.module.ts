import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompanyListComponent } from './company-list.component';
import { CompanyRoutingModule } from './company-list.routing';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class CompanyModule {}
