"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = require("../../../../common/models/room");
const mongoose = require("mongoose");
const abstractDao_1 = require("./abstractDao");
class RoomDao extends abstractDao_1.AbstractDao {
    constructor(data) {
        super();
        this.daoInstance = new (RoomDao.getDbModel())(data);
    }
    get _id() {
        return this.daoInstance._id;
    }
    get name() {
        return this.daoInstance.name;
    }
    set name(val) {
        this.daoInstance.name = name;
    }
    get capacity() {
        return this.daoInstance.capacity;
    }
    set capacity(val) {
        this.daoInstance.capacity = val;
    }
    get description() {
        return this.daoInstance.description;
    }
    set description(val) {
        this.daoInstance.description = val;
    }
    setDaoInstance(daoInst) {
        this.daoInstance = daoInst;
    }
    retrieve(id) {
        return RoomDao.dbModel.findById(id)
            .then((result) => {
            this.daoInstance = result;
            return this;
        });
    }
    retrieveAll() {
        return RoomDao.dbModel.find()
            .then((results) => {
            return results.map((doc) => {
                return RoomDao.createFromDocumentInstance(doc);
            });
        });
    }
    delete(id) {
        return RoomDao.dbModel.findByIdAndRemove(id)
            .then(() => {
        });
    }
    static createFromDocumentInstance(doc) {
        let inst = new RoomDao(new room_1.Room(doc));
        inst.setDaoInstance(doc);
        return inst;
    }
    static getDbModel() {
        if (!RoomDao.dbModel) {
            RoomDao.dbModel = mongoose.model("Room", RoomDao.getMongooseSchema());
        }
        return RoomDao.dbModel;
    }
    static getMongooseSchema() {
        return new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            capacity: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            }
        });
    }
}
exports.RoomDao = RoomDao;
