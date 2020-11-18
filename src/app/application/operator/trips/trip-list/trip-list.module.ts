import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripListComponent } from './trip-list.component';
import { TripRoutingModule } from './trip-list.routing';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from 'src/app/application/common/toolbar/toolbar.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TripListComponent],
  imports: [
    CommonModule,
    TripRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ToolbarModule
  ]
})
export class TripListModule { }
