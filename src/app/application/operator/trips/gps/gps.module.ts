import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpsComponent } from './gps.component';
import { GpsRouting } from './gps.routing';
import { AgmCoreModule } from '@agm/core';
import { ToolbarModule } from 'src/app/application/common/toolbar/toolbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [GpsComponent],
  imports: [
    CommonModule,
    GpsRouting,
    ToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_uySgUU0Wv99vO5whZfjTWRl_NNTqmC8',
    }),
    MatSnackBarModule,
  ],
})
export class GpsModule {}
