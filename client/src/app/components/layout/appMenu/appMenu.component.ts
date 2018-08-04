import {Component,Input} from "@angular/core";
import {MatSidenav} from "@angular/material";
import {UserSessionService} from "../../../services/user/userSession.service";

@Component( {
    selector:"app-menu",
    templateUrl:"./appMenu.component.html",
    styleUrls:["./appMenu.component.css"]
})
export class AppMenuComponent {
    @Input() sidenav:MatSidenav;

    constructor(private userSessionService:UserSessionService) {

    }

    isAdmin(): boolean {
        return this.userSessionService.isAdmin();
    }
}