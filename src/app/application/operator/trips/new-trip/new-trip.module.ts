import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTripComponent } from './new-trip.component';
import { NewTripRouting } from './new-trip.routing';



@NgModule({
  declarations: [NewTripComponent],
  imports: [
    CommonModule,
    NewTripRouting
  ]
})
export class NewTripModule { }
