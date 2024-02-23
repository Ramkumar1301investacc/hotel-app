import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationListComponent, ReservationFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ReservationModule {}