import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MdButtonModule,MdToolbarModule,MdIconModule,MdSidenavModule,MdListModule,MdInputModule} from "@angular/material";

import { RoomFormComponent } from "./components/room/roomForm/roomForm.component";
import { RoomListComponent } from "./components/room/roomList/roomList.component";

import { ReservationFormComponent } from "./components/reservation/reservationForm/reservationForm.component";
import { ReservationListComponent } from "./components/reservation/reservationList/reservationList.component";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    RoomFormComponent,
    RoomListComponent,
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdButtonModule,MdToolbarModule,MdIconModule,MdSidenavModule,MdListModule,MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
