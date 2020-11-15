import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TruckListComponent } from './truck-list.component';
import { TruckRoutingModule } from './truck-list.routing';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TruckListComponent],
  imports: [
    CommonModule,
    TruckRoutingModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class TruckModule {}
