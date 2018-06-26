import {Reservation} from "resa-room-common/lib/reservation";
import { CrudApiController, EntityDao, ApiResponse } from "apicore";
import { ReservationDao } from "../dao/reservationDao";
import { ReservationApiAccessController } from "./reservationApiAccessController";
import express = require("express");

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

    checkIfReservationIntersect(reservation1:Reservation,reservation2:Reservation) {
        return reservation1.roomId === reservation2.roomId &&
            (this.isDateContainedInReservation(reservation2,reservation1.beginDate) ||
            this.isDateContainedInReservation(reservation2,reservation1.endDate) || 
            this.isDateContainedInReservation(reservation1,reservation2.beginDate) ||
            this.isDateContainedInReservation(reservation1,reservation2.endDate));    
    }

    isDateContainedInReservation(reservation:Reservation,date:Date) {
        date.getTime() > reservation.beginDate.getTime() && date.getTime() < reservation.endDate.getTime();
    }
}