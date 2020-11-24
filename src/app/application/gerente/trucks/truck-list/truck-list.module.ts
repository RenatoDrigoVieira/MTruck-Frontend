import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TruckListComponent } from './truck-list.component';
import { TruckRoutingModule } from './truck-list.routing';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ToolbarModule } from 'src/app/application/common/toolbar/toolbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [TruckListComponent],
  imports: [
    CommonModule,
    TruckRoutingModule,
    MatListModule,
    MatIconModule,
    ToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
  ],
})
export class TruckModule {}
