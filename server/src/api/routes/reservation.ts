import express = require("express");
import { ReservationController } from "../controllers/reservationController";
import { CrudApiRouter } from "apicore/lib";
import { ReservationDao } from "../dao/reservationDao";

class ReservationRouter extends CrudApiRouter<ReservationDao> {
    constructor() {
        super(new ReservationController());
    }
}

let routerInst = new ReservationRouter();
export let router: express.Router = routerInst.getRouter();