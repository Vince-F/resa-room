"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = require("resa-room-common/lib/room");
const mongoose = require("mongoose");
const abstractDao_1 = require("./abstractDao");
class RoomDao extends abstractDao_1.AbstractDao {
    constructor(data) {
        super(data);
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
    update(id, data) {
        return RoomDao.dbModel.findByIdAndUpdate(id, data)
            .then((result) => {
            return data;
        });
    }
    delete(id) {
        return RoomDao.dbModel.findByIdAndRemove(id)
            .then(() => {
        });
    }
    toJSON() {
        return {
            _id: this._id,
            name: this.name,
            capacity: this.capacity,
            description: this.description
        };
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
                type: Number,
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
