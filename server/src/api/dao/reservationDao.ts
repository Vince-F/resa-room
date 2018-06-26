import { EntityDao } from "apicore";
import { Reservation } from "resa-room-common/lib/reservation";
import mongoose = require("mongoose");
import { AbstractDao } from "./abstractDao";
import { ReservationStatus } from "resa-room-common/lib/reservationStatus";

export class ReservationDao extends AbstractDao implements EntityDao {
    private static dbModel: mongoose.Model<mongoose.Document>;

    constructor(data: Reservation) {
        super();
        this.daoInstance = new (ReservationDao.getDbModel())(data);
    }

    get _id(): string {
        return this.daoInstance._id;
    }

    get authorId(): string {
        return this.daoInstance.authorId;
    }

    get roomId() {
        return this.daoInstance.roomId;
    }

    get beginDate() {
        return this.daoInstance.beginDate;
    }
    set beginDate(val: Date) {
        this.daoInstance.beginDate = val;
    }

    get endDate() {
        return this.daoInstance.endDate;
    }
    set endDate(val: Date) {
        this.daoInstance.endDate = new Date(val);
    }

    get comment() {
        return this.daoInstance.comment;
    }
    set comment(val: string) {
        this.daoInstance.comment = val;
    }

    get status() {
        return this.daoInstance.status;
    }
    set status(val: ReservationStatus) {
        this.daoInstance.status = val;
    }

    private setDaoInstance(daoInst: any) {
        this.daoInstance = daoInst;
    }

    retrieve(id: string) {
        return ReservationDao.dbModel.findById(id)
            .then((result) => {
                this.daoInstance = result;
                return this;
            });
    }

    retrieveAll() {
        return ReservationDao.dbModel.find()
            .then((results) => {
                return results.map((doc) => {
                    return ReservationDao.createFromDocumentInstance(doc);
                });
            });
    }

    delete(id: string) {
        return ReservationDao.dbModel.findByIdAndRemove(id)
            .then(() => {
            });
    }

    private static createFromDocumentInstance(doc: mongoose.Document) {
        let inst = new ReservationDao(new Reservation(doc));
        inst.setDaoInstance(doc);
        return inst;
    }

    static getDbModel() {
        if (!ReservationDao.dbModel) {
            ReservationDao.dbModel = mongoose.model("Room", ReservationDao.getMongooseSchema());
        }
        return ReservationDao.dbModel;
    }

    static getMongooseSchema() {
        return new mongoose.Schema({
            authorId: {
                type: String,
                required: true
            },
            roomId: {
                type: String,
                required: true
            },
            beginDate: {
                type: Date,
                required: true
            },
            endDate: {
                type:Date,
                required: true
            },
            comment: {
                type:String,
                required: false
            },
            status : {
                type:String,
                required: true
            }
        });
    }
}