import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
import {Reservation} from "../../../../common/models/reservation";

import 'rxjs/add/observable/from';

export class ReservationDataSource extends DataSource<any> {

    constructor(private filter:any) {
        super();
    }

    connect(): Observable<Reservation[]> {
        let testData:Array<Reservation[]> = [
            [{_id:"15656",authorId:"test",pending:false,roomId:"1234",beginDate:new Date("2017-08-01T08:00:00.000Z"),endDate:new Date("2017-08-01T10:00:00.000Z"),comment:"huf"},{_id:"48684",authorId:"test",roomId:"3455",pending:false,beginDate:new Date("2017-08-02T18:00:00.000Z"),endDate:new Date("2017-08-02T22:30:00.000Z"),comment:"huok"}], // set 1
            [{_id:"456554",roomId:"634",pending:false,authorId:"test",beginDate:new Date("2017-08-11T08:00:00.000Z"),endDate:new Date("2017-08-11T12:00:00.000Z"),comment:"ffdfd"},{_id:"46565",roomId:"6534",authorId:"admin",pending:false,beginDate:new Date("2017-08-11T13:00:00.000Z"),endDate:new Date("2017-08-11T20:00:00.000Z"),comment:"jiijij"}] // set 2
        ];
        return Observable.from(testData);
    }

    disconnect() {}
}