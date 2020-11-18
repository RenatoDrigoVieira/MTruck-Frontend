import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpsComponent } from './gps.component';
import { GpsRouting } from './gps.routing';



@NgModule({
  declarations: [GpsComponent],
  imports: [
    CommonModule,
    GpsRouting
  ]
})
export class GpsModule { }
