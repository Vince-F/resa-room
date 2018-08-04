import { Component } from '@angular/core';
import {UserSessionService} from "./services/user/userSession.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	menuOpened: boolean;
	title = 'app';

	constructor(private userSessionService:UserSessionService) {

	}

	toggleMenu() {
		this.menuOpened = !this.menuOpened;
	}

	isUserConnected() {
		return this.userSessionService.isConnected();
	}
}
