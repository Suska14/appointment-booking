import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Appointment } from 'src/app/shared/models/Appointment';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-datepicker-dialog',
  templateUrl: './datepicker-dialog.component.html',
  styleUrls: ['./datepicker-dialog.component.scss']
})
export class DatepickerDialogComponent {

  date = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<DatepickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Appointment,
    private appointmentService: AppointmentService
  ) { 
    if(data !== null){
      this.date.setValue(data.date.toString());
    }
  }

  onSaveClick() {
    if (this.date.value !== null && this.data !== null) {
      this.data.date = parseInt(this.date.value);
      this.appointmentService.update(this.data);
      console.log('Appointment updated successfully');
      
    }
    alert('Ez a funkció sajnos nem működik');
    this.dialogRef.close(this.data);
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    console.log('Date selected:', event.value);
  }

}
