import {Component} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import { Router } from '@angular/router';
import {UserSessionService} from "../../../services/user/userSession.service";

@Component( {
    selector:"login",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.css"]
})
export class LoginComponent {
    login:string;
    password:string;

    constructor(private userSessionService:UserSessionService,
                private snackBar:MatSnackBar,
                private router:Router) {

    }

    connect() {
        this.userSessionService.connect(this.login,this.password)
            .then(() => {
                this.router.navigate(["/home"])
            }).catch((response) => {   
                this.snackBar.open("Fail to connect: " + response);
            });
    }

    debugConnectAsUser() {
        this.userSessionService.debugConnectUser();
    }

    debugConnectAsAdmin() {
        this.userSessionService.debugConnectAdmin();
    }
}