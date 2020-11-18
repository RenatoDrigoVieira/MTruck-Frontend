import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorComponent } from './operator.component';
import { OperatorRoutingModule } from './operator.routing';



@NgModule({
  declarations: [OperatorComponent],
  imports: [
    CommonModule,
    OperatorRoutingModule
  ]
})
export class OperatorModule { }
