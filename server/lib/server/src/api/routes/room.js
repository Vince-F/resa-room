"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roomController_1 = require("../controllers/roomController");
const lib_1 = require("apicore/lib");
class RoomRouter extends lib_1.CrudApiRouter {
    constructor() {
        super(new roomController_1.RoomController());
    }
}
let routerInst = new RoomRouter();
exports.router = routerInst.getRouter();
