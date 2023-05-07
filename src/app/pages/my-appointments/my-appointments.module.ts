import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppointmentsRoutingModule } from './my-appointments-routing.module';
import { MyAppointmentsComponent } from './my-appointments.component';
import { MatTableModule } from '@angular/material/table';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DatepickerDialogComponent } from './datepicker-dialog/datepicker-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    MyAppointmentsComponent,
    DateFormatPipe,
    DatepickerDialogComponent
  ],
  imports: [
    CommonModule,
    MyAppointmentsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class MyAppointmentsModule { }
