"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reservationController_1 = require("../controllers/reservationController");
const lib_1 = require("apicore/lib");
class ReservationRouter extends lib_1.CrudApiRouter {
    constructor() {
        super(new reservationController_1.ReservationController());
    }
    cancel(req, res) {
        let id = req.params.id;
        this.sendResponseFromPromise(this.ctrlInstance.cancel(id, req), res);
    }
}
let routerInst = new ReservationRouter();
exports.router = routerInst.getRouter();
