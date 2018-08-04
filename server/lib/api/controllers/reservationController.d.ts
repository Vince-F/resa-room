import { Reservation } from "resa-room-common/lib/reservation";
import { CrudApiController, ApiResponse } from "apicore";
import { ReservationDao } from "../dao/reservationDao";
import express = require("express");
export declare class ReservationController extends CrudApiController<ReservationDao> {
    constructor();
    create(data: any, req: express.Request): Promise<ApiResponse>;
    cancel(id: string, req: express.Request): Promise<ApiResponse>;
    checkIfReservationIntersect(reservation1: Reservation, reservation2: Reservation): void;
    isDateContainedInReservation(reservation: Reservation, date: Date): void;
}
