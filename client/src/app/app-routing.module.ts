import { NgModule,ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./components/user/login/login.component";
import { HomeComponent } from "./components/layout/home/home.component";
import { RoomFormComponent } from "./components/room/roomForm/roomForm.component";
import { RoomListComponent } from "./components/room/roomList/roomList.component";

/*import { ReservationFormComponent } from "./components/reservation/reservationForm/reservationForm.component";
import { ReservationListComponent } from "./components/reservation/reservationList/reservationList.component";

/*import {CalendarViewComponent } from "./components/calendar/calendarView/calendarView.component";

import {UserSessionService} from "./services/user/userSession.service"
*/
// guards
import { AdminGuard } from "./services/guards/adminGuard.service"
import { AuthenticationGuard } from "./services/guards/authenticationGuard.service"
import { NeedSaveGuard } from "./services/guards/needSaveGuard.service"

//import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
    //{ path: 'reservations/:state', component: ReservationListComponent,canActivate:[AuthenticationGuard] },
    //{ path: 'reservation/new', component: ReservationFormComponent,canActivate:[AuthenticationGuard] },
    //{ path: 'reservation/:id',},
    //{ path: 'reservation/:id/edit', component: ReservationFormComponent,canActivate:[AuthenticationGuard] },
    { path: 'rooms', component: RoomListComponent,canActivate:[AuthenticationGuard] },
    { path: 'room/:id', component: RoomFormComponent,canActivate:[AuthenticationGuard] },

    {
        path: 'admin', canActivate:[AdminGuard],canActivateChild:[AdminGuard],
        children: [
            { path: 'rooms', component: RoomListComponent },
            { path: 'room/new', component: RoomFormComponent,canDeactivate:[NeedSaveGuard] },
            { path: 'room/:id', component: RoomFormComponent,canDeactivate:[NeedSaveGuard] },
        ]
    },

    //{ path: 'room/:id/edit',},
    //{ path: '',   redirectTo: '/calendar', pathMatch: 'full' },
    //{ path: 'admin/reservations/:state',},
    // { path: '**', component: PageNotFoundComponent }



    { path: '', redirectTo: '/login', pathMatch: 'full' },
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
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppRoutingModule,
            providers: [AuthenticationGuard]
        };
    }
}