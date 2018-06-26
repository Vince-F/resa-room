import { EntityDao } from "apicore";
import { Room } from "../../../../common/models/room";
import mongoose = require("mongoose");
import { AbstractDao } from "./abstractDao";
export declare class RoomDao extends AbstractDao implements EntityDao {
    private static dbModel;
    constructor(data: Room);
    readonly _id: string;
    name: string;
    capacity: number;
    description: string;
    private setDaoInstance;
    retrieve(id: string): Promise<this>;
    retrieveAll(): Promise<RoomDao[]>;
    delete(id: string): Promise<void>;
    private static createFromDocumentInstance;
    static getDbModel(): mongoose.Model<mongoose.Document>;
    static getMongooseSchema(): mongoose.Schema;
}
