import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NewCompanyComponent } from './new-company.component';
import { NewCompanyRouting } from './new-company.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToolbarModule } from 'src/app/application/common/toolbar/toolbar.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [NewCompanyComponent],
  imports: [
    CommonModule,
    MatListModule,
    NewCompanyRouting,
    MatIconModule,
    ToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})
export class NewCompanyModule {}
