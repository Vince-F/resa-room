"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_1 = require("resa-room-common/lib/reservation");
const mongoose = require("mongoose");
const abstractDao_1 = require("./abstractDao");
class ReservationDao extends abstractDao_1.AbstractDao {
    constructor(data) {
        super(data);
        this.daoInstance = new (ReservationDao.getDbModel())(data);
    }
    get _id() {
        return this.daoInstance._id;
    }
    get authorId() {
        return this.daoInstance.authorId;
    }
    get roomId() {
        return this.daoInstance.roomId;
    }
    get beginDate() {
        return this.daoInstance.beginDate;
    }
    set beginDate(val) {
        this.daoInstance.beginDate = val;
    }
    get endDate() {
        return this.daoInstance.endDate;
    }
    set endDate(val) {
        this.daoInstance.endDate = new Date(val);
    }
    get comment() {
        return this.daoInstance.comment;
    }
    set comment(val) {
        this.daoInstance.comment = val;
    }
    get status() {
        return this.daoInstance.status;
    }
    set status(val) {
        this.daoInstance.status = val;
    }
    setDaoInstance(daoInst) {
        this.daoInstance = daoInst;
    }
    retrieve(id) {
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
    update(id, data) {
        return ReservationDao.dbModel.findByIdAndUpdate(id, data)
            .then((result) => {
            return ReservationDao.createFromDocumentInstance(result);
        });
    }
    delete(id) {
        return ReservationDao.dbModel.findByIdAndRemove(id)
            .then(() => {
        });
    }
    static createFromDocumentInstance(doc) {
        let inst = new ReservationDao(new reservation_1.Reservation(doc));
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
                type: Date,
                required: true
            },
            comment: {
                type: String,
                required: false
            },
            status: {
                type: String,
                required: true
            }
        });
    }
}
exports.ReservationDao = ReservationDao;
