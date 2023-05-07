import { Component } from '@angular/core';
import { Appointment } from '../../../shared/models/Appointment';
import { GovernmentOffice } from '../../../shared/models/GovernmentOffice';
import { Offices, offices } from '../../../shared/models/Offices';
import { AppointmentService } from '../../../shared/services/appointment.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss']
})
export class OfficeListComponent {
  offices: Offices = offices;
  selectedDate!: number;
  selectedOffice!: GovernmentOffice;
  
  constructor(private appointmentService: AppointmentService,private router: Router, private authService: AuthService){}

  onSelect(offices: GovernmentOffice): void {
    this.selectedOffice = offices;
  }

  saveAppointment() {
    if (this.selectedDate && this.selectedOffice) {
      this.authService.getUserId().then(uid => {
        const appointment: Appointment = {
          date: this.selectedDate,
          userId: uid || null,
          office: {
            name: this.selectedOffice.name,
            address: this.selectedOffice.address
          } 
        };
        this.appointmentService.create(appointment);
        console.log(appointment);
        alert('Sikeres foglalás!');
        this.router.navigateByUrl('/my-appointments');
      });
    }
  }

  dateSelected(event: any) {
    this.selectedDate = event;
  }
}
