import { EntityDao } from "apicore";
import { Reservation } from "resa-room-common/lib/reservation";
import mongoose = require("mongoose");
import { AbstractDao } from "./abstractDao";
import { ReservationStatus } from "resa-room-common/lib/reservationStatus";
export declare class ReservationDao extends AbstractDao implements EntityDao {
    private static dbModel;
    constructor(data: Reservation);
    readonly _id: string;
    readonly authorId: string;
    readonly roomId: any;
    beginDate: Date;
    endDate: Date;
    comment: string;
    status: ReservationStatus;
    private setDaoInstance;
    retrieve(id: string): Promise<this>;
    retrieveAll(): Promise<ReservationDao[]>;
    update(id: string, data: ReservationDao): Promise<ReservationDao>;
    delete(id: string): Promise<void>;
    private static createFromDocumentInstance;
    static getDbModel(): mongoose.Model<mongoose.Document>;
    static getMongooseSchema(): mongoose.Schema;
}
