import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { RoomFormComponent } from "./components/room/roomForm/roomForm.component";
import { RoomListComponent } from "./components/room/roomList/roomList.component";

import { ReservationFormComponent } from "./components/reservation/reservationForm/reservationForm.component";
import { ReservationListComponent } from "./components/reservation/reservationList/reservationList.component";

//import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  //{ path: 'calendar', /*component: CrisisListComponent*/ },
  { path: 'reservations/:state',component:ReservationListComponent},
  { path: 'reservation/new',component:ReservationFormComponent},
  //{ path: 'reservation/:id',},
  { path: 'reservation/:id/edit',component:ReservationFormComponent},
  { path: 'rooms',component:RoomListComponent},
  { path: 'room/new', component:RoomFormComponent},
  { path: 'room/:id', component:RoomFormComponent},
  //{ path: 'room/:id/edit',},
  //{ path: '',   redirectTo: '/calendar', pathMatch: 'full' },
  //{ path: 'admin/reservations/:state',},
  // { path: '**', component: PageNotFoundComponent }
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