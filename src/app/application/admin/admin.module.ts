import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [AdminRoutingModule, MatIconModule, MatToolbarModule],
})
export class AdminModule {}
