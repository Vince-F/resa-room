import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserSessionService {
    private prefixUrl:string = "/auth"
    private login:string;
    private connected:boolean;
    private admin:boolean;

    constructor(private router:Router, private http:Http) {
        this.login = "";
        this.admin = false;
        this.connected = false;
    }

    connect(login:string,password:string) {
        return this.http.post(this.prefixUrl + '/connect',{login,password})
            .toPromise()
            .then((response) => {
                let bodyResponse = response.json();
                if(bodyResponse.success === false) {
                    return Promise.reject(bodyResponse.error);
                } else {
                    let result = bodyResponse.result;
                    this.login = result.login;
                    this.connected = true;
                    this.admin = result.role === "Admin";
                }
            });
    }

    retrieveExistingSession() {
        return this.http.get(this.prefixUrl + "/retrieveSession")
            .toPromise()
            .then((response) => {
                let bodyResponse = response.json();
                if(bodyResponse.success === false) {
                    return Promise.reject(bodyResponse.error);
                } else {
                    let result = bodyResponse.result;
                    this.login = result.login;
                    this.connected = true;
                    this.admin = result.role === "Admin";
                }
            });
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
        this.router.navigate(["/home"]);
    }

    debugConnectAdmin() {
        this.login = "fakeAdmin";
        this.connected = true;
        this.admin = true;
        this.router.navigate(["/home"]);
    }
}