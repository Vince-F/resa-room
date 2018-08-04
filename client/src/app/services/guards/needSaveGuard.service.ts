import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

export interface NeedSave {
    save: () => Promise<any>;
    needSave: () => boolean;
}

@Injectable()
export class NeedSaveGuard implements CanDeactivate<NeedSave> {
    canDeactivate(component: NeedSave) {
        if(component.needSave()) {
            // later ask for confirmation
            alert("Need to save first");
            return false;
        } else {
            return true;
        }
    }
}