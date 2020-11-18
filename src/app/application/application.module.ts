import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';
import { OperatorComponent } from './operator/operator.component';
import { TripListComponent } from './operator/trips/trip-list/trip-list.component';
import { NewTripComponent } from './operator/trips/new-trip/new-trip.component';

@NgModule({
  declarations: [ApplicationComponent, OperatorComponent, TripListComponent, NewTripComponent],
  imports: [ApplicationRoutingModule],
})
export class ApplicationModule {}
