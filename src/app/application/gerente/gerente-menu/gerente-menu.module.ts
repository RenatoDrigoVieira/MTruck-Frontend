import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GerenteMenuComponent } from './gerente-menu.component';
import { GerenteRoutingModule } from './gerente-menu.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [GerenteMenuComponent],
  imports: [GerenteRoutingModule, MatIconModule, MatToolbarModule],
})
export class GerenteMenuModule {}
