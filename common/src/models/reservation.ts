import {ReservationStatus} from "./reservationStatus";

export class Reservation {
    _id:string;
    authorId:string;
    roomId:string;
    beginDate:Date;
    endDate:Date;
    comment:string;
    status:ReservationStatus

    constructor(data:any) {
        if(typeof data !== "object" || data === null) {
            throw new TypeError("Cannot create reservation instance, data is undefined");
        }
        this._id = data._id;
        if(typeof data.roomId !== "string") {
            this.roomId = data.roomId;
        }
    }
}