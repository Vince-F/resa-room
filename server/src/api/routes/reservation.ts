import express = require("express");
import { ReservationController } from "../controllers/reservationController";
import { CrudApiRouter } from "apicore/lib";
import { ReservationDao } from "../dao/reservationDao";

class ReservationRouter extends CrudApiRouter<ReservationDao> {
    ctrlInstance: ReservationController;

    constructor() {
        super(new ReservationController());
    }

    cancel(req:express.Request,res:express.Response) {
        let id = req.params.id;

        this.sendResponseFromPromise(this.ctrlInstance.cancel(id,req),res);
    }
}

let routerInst = new ReservationRouter();
export let router: express.Router = routerInst.getRouter();