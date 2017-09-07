import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild } from '@angular/router';

import {UserSessionService} from "../user/userSession.service"

@Injectable()
export class AdminGuard implements CanActivate,CanActivateChild {
    
    constructor(private userSessionService:UserSessionService) {

    }
    
    canActivate() {
        return this.userSessionService.isAdmin();
    }

    canActivateChild() {
        return this.userSessionService.isAdmin();
    }
}