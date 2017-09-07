import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserSessionService {
    private login:string;
    private connected:boolean;
    private admin:boolean;

    constructor(private router:Router) {
        this.login = "";
        this.admin = false;
        this.connected = false;
    }

    getLogin() :string {
        return this.login;
    }

    isAdmin():boolean {
        return this.admin;
    }

    isConnected():boolean {
        return this.connected;
    }

    debugConnectUser() {
        this.login = "fakeUser";
        this.connected = true;
        this.admin = false;
        this.router.navigate(["/rooms"]);
    }

    debugConnectAdmin() {
        this.login = "fakeAdmin";
        this.connected = true;
        this.admin = true;
        this.router.navigate(["/rooms"]);
    }
}