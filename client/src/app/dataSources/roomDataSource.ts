import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
import {Room} from "../../../../common/models/room";

import 'rxjs/add/observable/from';

export class RoomDataSource extends DataSource<any> {
    connect(): Observable<Room[]> {
        let testData:Array<Room[]> = [
            [{_id:"1234",name:"test1",capacity:5,description:"test"},{_id:"3455",name:"another test",capacity:56,description:"huhu"}], // set 1
            [{_id:"634",name:"tress",capacity:54,description:"tesezfefet"},{_id:"6534",name:"efefef",capacity:56,description:"fezeef"}] // set 2
        ];
        return Observable.from(testData);
    }

    disconnect() {}
}