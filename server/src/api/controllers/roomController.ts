import { CrudApiController } from "apicore";
import { RoomDao } from "../dao/roomDao";
import {RoomApiAccessController} from "./roomApiAccessController";

export class RoomController extends CrudApiController<RoomDao> {

    constructor() {
        super(RoomDao,"Room",new RoomApiAccessController());
    }
}