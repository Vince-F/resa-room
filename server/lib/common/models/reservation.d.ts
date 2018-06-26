import { ReservationStatus } from "./reservationStatus";
export declare class Reservation {
    _id: string;
    authorId: string;
    roomId: string;
    beginDate: Date;
    endDate: Date;
    comment: string;
    status: ReservationStatus;
    constructor(data: any);
}
