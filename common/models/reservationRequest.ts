import {Reservation} from "./reservation";

export class ReservationRequest extends Reservation {
    pending:boolean;
    refused:boolean;
}