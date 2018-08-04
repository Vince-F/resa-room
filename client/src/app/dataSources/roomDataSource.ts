/*import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/observable';
import {Room} from "resa-room-common/lib/room";
import {RoomApiService} from "../services/api/roomApiService";

import 'rxjs/add/observable/from';

export class RoomDataSource extends DataSource<any> {
    constructor(private roomApiService:RoomApiService) {
        super();
    }

    connect(): Observable<Room[]> {
        return Observable.from(this.roomApiService.retrieveList());
    }

    disconnect() {}
}*/