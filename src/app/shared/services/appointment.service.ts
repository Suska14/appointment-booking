import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Appointment } from '../models/Appointment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  collectionName = 'Appointments';

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  async create(appointment: Appointment){
    appointment.id = this.afs.createId();
    appointment.userId = await this.authService.getUserId();
    return this.afs.collection<Appointment>(this.collectionName).doc(appointment.id).set(appointment);
  }
  
  getAppointments(): Observable<Appointment[]> {
    return this.afs.collection<Appointment>(this.collectionName).valueChanges();
  }

  getAll(userId: string){
    return this.afs.collection<Appointment>(this.collectionName, ref => ref.where('userId', '==', userId)).valueChanges();
  }

  update(appointment: Appointment){
    return this.afs.collection<Appointment>(this.collectionName).doc(appointment.id).set(appointment);
  }

  delete(id: string){
    return this.afs.collection<Appointment>(this.collectionName).doc(id).delete();
  }
}
