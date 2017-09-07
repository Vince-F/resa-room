import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";
import {UserSessionService} from "../../../services/user/userSession.service";

@Component( {
    selector:"login",
    templateUrl:"login.component.html",
    styles:["login.component.css"]
})
export class LoginComponent {

    constructor(private userSessionService:UserSessionService) {

    }

    connect() {

    }

    debugConnectAsUser() {
        this.userSessionService.debugConnectUser();
    }

    debugConnectAsAdmin() {
        this.userSessionService.debugConnectAdmin();
    }
}