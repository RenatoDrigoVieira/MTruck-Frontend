import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTripComponent } from './new-trip.component';
import { NewTripRouting } from './new-trip.routing';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToolbarModule } from 'src/app/application/common/toolbar/toolbar.module';

@NgModule({
  declarations: [NewTripComponent],
  imports: [
    CommonModule,
    NewTripRouting,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    ToolbarModule
  ]
})
export class NewTripModule { }
