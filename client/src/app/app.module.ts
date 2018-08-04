import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import {CdkTableModule} from '@angular/cdk/table';
import { MatToolbarModule, MatListModule, MatIconModule, MatSidenavModule, MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatTableModule,MatSortModule,MatCheckboxModule,MatDialogModule  } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";

// services
import { UserSessionService } from "./services/user/userSession.service";
import { AuthenticationGuard } from "./services/guards/authenticationGuard.service";
import {AdminGuard} from "./services/guards/adminGuard.service";
import { NeedSaveGuard } from "./services/guards/needSaveGuard.service";

// api
import { RoomApiService } from './services/api/roomApiService';

// components
import { LoginComponent } from "./components/user/login/login.component";
import { AppMenuComponent } from "./components/layout/appMenu/appMenu.component";
import { HomeComponent } from './components/layout/home/home.component';
import {RoomListComponent} from "./components/room/roomList/roomList.component";
import { ConfirmationModalComponent } from "./components/modals/confirmationModal/confirmationModal.component";
import { RoomFormComponent } from './components/room/roomForm/roomForm.component';
import { RoomViewComponent } from './components/room/roomView/roomView.component';


@NgModule({
	declarations: [
		AppComponent,
		AppMenuComponent,
		LoginComponent,
		ConfirmationModalComponent,
		HomeComponent,
		RoomListComponent, RoomFormComponent, RoomViewComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule, BrowserAnimationsModule,
		FormsModule, HttpModule,
		CdkTableModule,
		MatToolbarModule, MatListModule, MatIconModule, MatSidenavModule, MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule,
		MatTableModule,MatSortModule,MatCheckboxModule,MatDialogModule
	],
	providers: [
		/*ReservationApiService,*/ RoomApiService,
		UserSessionService, AdminGuard, AuthenticationGuard, NeedSaveGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
