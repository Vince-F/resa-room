import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserSessionService } from "../user/userSession.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private userSessionService: UserSessionService,
        private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        let url = state.url;
        return this.canAccessPage(url);
    }

    canAccessPage(url: string): boolean |Promise<boolean> {
        if (this.userSessionService.isConnected()) {
            if (url === "/login") {
                return false;
            } else {
                return true;
            }
        } else {
            if (url === "/login") {
                return true;
            } else {
                return this.userSessionService.retrieveExistingSession()
                    .then(() => {
                        if (this.userSessionService.isConnected()) {
                            return true;
                        } else {
                            this.router.navigate(['/login']);
                            return false;
                        }
                    });

            }
        }
    }
}