"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apicore_1 = require("apicore");
const roomDao_1 = require("../dao/roomDao");
const roomApiAccessController_1 = require("./roomApiAccessController");
class RoomController extends apicore_1.CrudApiController {
    constructor() {
        super(roomDao_1.RoomDao, "Room", new roomApiAccessController_1.RoomApiAccessController());
    }
}
exports.RoomController = RoomController;
