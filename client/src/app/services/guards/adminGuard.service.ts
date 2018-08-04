import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild,Router } from '@angular/router';

import {UserSessionService} from "../user/userSession.service"

@Injectable()
export class AdminGuard implements CanActivate,CanActivateChild {
    
    constructor(private userSessionService:UserSessionService,
                private router:Router) {

    }
    
    canActivate() {
        if(this.userSessionService.isAdmin()) {
            return true;
        } else {
            this.router.navigate(["/home"]);
            return false;
        }
    }

    canActivateChild() {
        if(this.userSessionService.isAdmin()) {
            return true;
        } else {
            this.router.navigate(["/home"]);
            return false;
        }
    }
}