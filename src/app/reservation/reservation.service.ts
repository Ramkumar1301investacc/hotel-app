import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationModule } from './reservation.module';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { 
    let savedReservation = localStorage.getItem("reservation" );
    this.reservation=savedReservation? JSON.parse(savedReservation):[];





  }
private reservation: Reservation[]=[];
  
getReservations(): Reservation[]{
    return this.reservation

}
getReservation(id:string):Reservation|undefined{
  return this.reservation.find(res => res.id === id);
  
}
addReservation(reservation:Reservation): void{
  reservation.id=Date.now().toString();
  this.reservation.push(reservation)
  localStorage.setItem("reservation",JSON.stringify( this.reservation));
  console.log(reservation)
}
deleteReservation(id:string):void{
  let index= this.reservation.findIndex(res => res.id === id);
  this.reservation.splice(index,1)
  localStorage.setItem("reservation",JSON.stringify( this.reservation));

}
updateReservation(id: string,updateReservation:Reservation):void{
  let index=this.reservation.findIndex(res =>res.id === id);
  this.reservation[index]=updateReservation
  localStorage.setItem("reservation",JSON.stringify( this.reservation));

}
}
