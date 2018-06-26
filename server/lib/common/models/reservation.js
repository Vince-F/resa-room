"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reservation {
    constructor(data) {
        if (typeof data !== "object" || data === null) {
            throw new TypeError("Cannot create reservation instance, data is undefined");
        }
        this._id = data._id;
        if (typeof data.roomId !== "string") {
            this.roomId = data.roomId;
        }
    }
}
exports.Reservation = Reservation;
