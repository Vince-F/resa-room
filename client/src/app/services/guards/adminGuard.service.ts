import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate() {
        return true;
    }
}