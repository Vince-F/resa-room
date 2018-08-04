"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_1 = require("resa-room-common/lib/reservation");
const apicore_1 = require("apicore");
const reservationDao_1 = require("../dao/reservationDao");
const reservationApiAccessController_1 = require("./reservationApiAccessController");
const reservationStatus_1 = require("resa-room-common/lib/reservationStatus");
class ReservationController extends apicore_1.CrudApiController {
    constructor() {
        super(reservationDao_1.ReservationDao, "Reservation", new reservationApiAccessController_1.ReservationApiAccessController());
    }
    create(data, req) {
        try {
            data.authorId = req.session.userData.login;
            let newReservation = new reservation_1.Reservation(data);
            let isRoomFree = true;
            return this.retrieveAll(req)
                .then((retrieveAllRes) => {
                let reservations = retrieveAllRes.data;
                reservations.forEach((reservation) => {
                    reservation.beginDate = new Date(reservation.beginDate);
                    reservation.endDate = new Date(reservation.endDate);
                    if (this.checkIfReservationIntersect(reservation, newReservation)) {
                        isRoomFree = false;
                    }
                });
                if (isRoomFree) {
                    return super.create(newReservation, req);
                }
                else {
                    return Promise.reject({ status: 406, error: "The room is not available at this date." });
                }
            });
        }
        catch (error) {
            return Promise.reject({ error: "Fail to create reservation: " + error, status: 500 });
        }
    }
    cancel(id, req) {
        return this.retrieve(id, req)
            .then((retrieveResponse) => {
            let reservation = retrieveResponse.data;
            return this.permissionMgr.canExecuteAction(this.entityName, "cancel", req, reservation).then(() => {
                reservation.status = reservationStatus_1.ReservationStatus.CANCELED;
                return this.update(id, reservation, req);
            });
        });
    }
    checkIfReservationIntersect(reservation1, reservation2) {
        return reservation1.roomId === reservation2.roomId &&
            (this.isDateContainedInReservation(reservation2, reservation1.beginDate) ||
                this.isDateContainedInReservation(reservation2, reservation1.endDate) ||
                this.isDateContainedInReservation(reservation1, reservation2.beginDate) ||
                this.isDateContainedInReservation(reservation1, reservation2.endDate)) &&
            reservation1.status !== reservationStatus_1.ReservationStatus.CANCELED && reservation2.status !== reservationStatus_1.ReservationStatus.CANCELED;
    }
    isDateContainedInReservation(reservation, date) {
        date.getTime() > reservation.beginDate.getTime() && date.getTime() < reservation.endDate.getTime();
    }
}
exports.ReservationController = ReservationController;
