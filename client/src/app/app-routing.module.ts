import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { RoomForm } from "./components/room/roomForm.component";
import { RoomList } from "./components/room/roomList.component";

import { ReservationForm } from "./components/reservation/reservationForm.component";
import { ReservationList } from "./components/reservation/reservationList.component";

//import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'calendar', /*component: CrisisListComponent*/ },
  { path: 'reservations/:state',component:ReservationList},
  { path: 'reservation/new',component:ReservationForm},
  { path: 'reservation/:id',},
  { path: 'reservation/:id/edit',component:ReservationForm},
  { path: 'rooms',component:RoomList},
  { path: 'room/new', component:RoomForm},
  { path: 'room/:id', component:RoomForm},
  { path: 'room/:id/edit',},
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'admin/reservations/:state',},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}