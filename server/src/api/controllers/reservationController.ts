import {Reservation} from "resa-room-common/lib/reservation";
import { CrudApiController, EntityDao, ApiResponse } from "apicore";
import { ReservationDao } from "../dao/reservationDao";
import { ReservationApiAccessController } from "./reservationApiAccessController";
import express = require("express");
import { ReservationStatus } from "resa-room-common/lib/reservationStatus";

export class ReservationController extends CrudApiController<ReservationDao> {
    constructor() {
        super(ReservationDao,"Reservation",new ReservationApiAccessController());
    }

    create(data:any,req:express.Request) {
        try {
            data.authorId = req.session.userData.login;
            let newReservation = new Reservation(data);
            //check if room is available
            // optimise later when filter are available on retrieveAll
            let isRoomFree = true;
            return this.retrieveAll(req)
                .then((retrieveAllRes) => {
                    let reservations = retrieveAllRes.data as Array<ReservationDao>;
                    reservations.forEach((reservation) => {
                        reservation.beginDate = new Date(reservation.beginDate);
                        reservation.endDate = new Date(reservation.endDate);
                        if(this.checkIfReservationIntersect(reservation,newReservation)) {
                            isRoomFree = false;
                        }
                    });
                    if(isRoomFree) {
                        return super.create(newReservation,req);
                    } else {
                        return Promise.reject({status:406, error:"The room is not available at this date."} as ApiResponse);
                    }
                });
        } catch(error) {
            return Promise.reject({error:"Fail to create reservation: " + error,status:500});
        }
    }

    cancel(id:string,req:express.Request):Promise<ApiResponse> {
        return this.retrieve(id,req)
            .then((retrieveResponse) => {
                let reservation = retrieveResponse.data as ReservationDao;
                return this.permissionMgr.canExecuteAction(this.entityName,"cancel",
                    req,reservation).then(() => {
                        reservation.status = ReservationStatus.CANCELED;
                        return this.update(id,reservation,req);
                    });
            })
    }

    checkIfReservationIntersect(reservation1:Reservation,reservation2:Reservation) {
        return reservation1.roomId === reservation2.roomId &&
            (this.isDateContainedInReservation(reservation2,reservation1.beginDate) ||
            this.isDateContainedInReservation(reservation2,reservation1.endDate) || 
            this.isDateContainedInReservation(reservation1,reservation2.beginDate) ||
            this.isDateContainedInReservation(reservation1,reservation2.endDate)) &&
            reservation1.status !== ReservationStatus.CANCELED && reservation2.status !== ReservationStatus.CANCELED;    
    }

    isDateContainedInReservation(reservation:Reservation,date:Date) {
        date.getTime() > reservation.beginDate.getTime() && date.getTime() < reservation.endDate.getTime();
    }
}