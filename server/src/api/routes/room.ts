import express = require("express");
import {RoomController} from "../controllers/roomController";
import { CrudApiRouter } from "apicore/lib";
import { RoomDao } from "../dao/roomDao";

class RoomRouter extends CrudApiRouter<RoomDao> {
    constructor() {
        super(new RoomController());
    }
}

let routerInst = new RoomRouter();
export let router:express.Router = routerInst.getRouter();