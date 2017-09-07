import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MdButtonModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule, MdInputModule, MdTableModule, MdSnackBarModule, MdCheckboxModule, MdDialogModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule, MdCardModule, MdChipsModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk";

import { LoginComponent } from "./components/user/login/login.component";

import { RoomFormComponent } from "./components/room/roomForm/roomForm.component";
import { RoomListComponent } from "./components/room/roomList/roomList.component";

import { ReservationFormComponent } from "./components/reservation/reservationForm/reservationForm.component";
import { ReservationListComponent } from "./components/reservation/reservationList/reservationList.component";

import { ConfirmationModalComponent } from "./components/modals/confirmationModal/confirmationModal.component";

import { HttpModule } from '@angular/http';

import { AppMenuComponent } from "./components/layout/appMenu/appMenu.component";

import { RoomApiService } from "./services/api/roomApiService";
import { ReservationApiService } from "./services/api/reservationApiService";

import { CalendarViewComponent } from "./components/calendar/calendarView/calendarView.component";
import { DayDetailViewComponent } from "./components/calendar/dayDetailView/dayDetailView.component"

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';

import { UserSessionService } from "./services/user/userSession.service"

// guards
import { AdminGuard } from "./services/guards/adminGuard.service"
import { AuthenticationGuard } from "./services/guards/authenticationGuard.service"
import { NeedSaveGuard } from "./services/guards/needSaveGuard.service"

@NgModule({
    declarations: [
        AppComponent,
        AppMenuComponent,
        CalendarViewComponent,
        RoomFormComponent,
        RoomListComponent,
        ReservationFormComponent,
        ReservationListComponent,
        ConfirmationModalComponent,
        DayDetailViewComponent,
        LoginComponent
    ],
    entryComponents: [
        ConfirmationModalComponent,
        DayDetailViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CdkTableModule,
        MdTableModule, MdButtonModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule, MdInputModule, MdSnackBarModule, MdCheckboxModule, MdDialogModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule, MdCardModule, MdChipsModule
    ],
    providers: [
        ReservationApiService, RoomApiService,
        UserSessionService, AdminGuard, AuthenticationGuard, NeedSaveGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
