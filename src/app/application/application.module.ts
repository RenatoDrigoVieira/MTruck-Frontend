import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';
<<<<<<< HEAD
import { ToolbarComponent } from './common/toolbar/toolbar.component';
=======
import { OperatorComponent } from './operator/operator.component';
import { TripListComponent } from './operator/trips/trip-list/trip-list.component';
import { NewTripComponent } from './operator/trips/new-trip/new-trip.component';
>>>>>>> 42cd06c59d3ab1e12a20ffa9514916cfc35d575c

@NgModule({
  declarations: [ApplicationComponent, OperatorComponent, TripListComponent, NewTripComponent],
  imports: [ApplicationRoutingModule],
})
export class ApplicationModule {}
