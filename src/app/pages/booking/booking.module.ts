import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    BookingComponent,
    OfficeListComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatExpansionModule,
    FormsModule,
    MatNativeDateModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class BookingModule { }
