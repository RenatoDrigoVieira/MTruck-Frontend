import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GerenteComponent } from './gerente.component';
import { GerenteRoutingModule } from './gerente.routing';

@NgModule({
  declarations: [GerenteComponent],
  imports: [GerenteRoutingModule],
})
export class GerenteModule {}
