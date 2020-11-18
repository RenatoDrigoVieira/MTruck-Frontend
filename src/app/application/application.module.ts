import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';
import { ToolbarComponent } from './common/toolbar/toolbar.component';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [ApplicationRoutingModule],
})
export class ApplicationModule {}
