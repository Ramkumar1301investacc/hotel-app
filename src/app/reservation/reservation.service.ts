import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationModule } from './reservation.module';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
private reservation: Reservation[]=[];
  
getreservations(): Reservation[]{
    return this.reservation

}
getReservation(id:string):Reservation|undefined{
  return this.reservation.find(res => res.id === id);
  
}
addReservation(reservation:Reservation): void{
  this.reservation.push(reservation)
}
deleteReservation(id:string):void{
  let index= this.reservation.findIndex(res => res.id === id);
  this.reservation.splice(index,1)
}

}
