import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../shared/models/Appointment';
import { AppointmentService } from '../../shared/services/appointment.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DatepickerDialogComponent } from './datepicker-dialog/datepicker-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  displayedColumns: string[] = ['date', 'office','actions'];
  appointmentsDataSource = new MatTableDataSource<Appointment>();
  dataSource = this.appointmentsDataSource;
  userId: string | null = null;

  constructor(private authService: AuthService, private appointmentService: AppointmentService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.authService.getUserId().then(userId => {
      if(userId){
        this.userId = userId;
        this.appointmentService.getAll(userId).subscribe({
          next: (appointments: Appointment[]) => {
            console.log('Appointments:', appointments);
            this.appointments = appointments.filter(appointment => appointment.userId === this.userId);
            this.appointmentsDataSource = new MatTableDataSource(this.appointments);
          },
          error: (error) => {
            console.error('Error getting appointments:', error);
          }
        });
      }
    });
  }

  editAppointment(appointment: Appointment) {
    const dialogRef = this.dialog.open(DatepickerDialogComponent);
    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        appointment.date = result;
        this.appointmentService.update(appointment);
        console.log('Appointment updated successfully');
      }
    });
  }

  deleteAppointment(appointment: Appointment){
    if(appointment.id){
      const confirmed = window.confirm('Biztosan törli az időpontot?');
      if(!confirmed){
        return;
      }
      this.appointmentService.delete(appointment.id);
      alert('Időpont törölve.');
    }
  }
}
