import { NgModule } from '@angular/core';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { OperatorComponent } from './operator/operator.component';
import { TripListComponent } from './operator/trips/trip-list/trip-list.component';
import { NewTripComponent } from './operator/trips/new-trip/new-trip.component';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [ApplicationRoutingModule],
})
export class ApplicationModule {}
