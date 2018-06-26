import { EntityDao } from "apicore";
import {Room} from "resa-room-common/lib/room";
import mongoose = require("mongoose");
import { AbstractDao } from "./abstractDao";

export class RoomDao extends AbstractDao implements EntityDao {
    private static dbModel:mongoose.Model<mongoose.Document>;

    constructor(data:Room) {
        super();
        this.daoInstance = new (RoomDao.getDbModel())(data);
    }

    get _id():string {
        return this.daoInstance._id;
    }

    get name() {
        return this.daoInstance.name;
    }
    set name(val:string) {
        this.daoInstance.name = name;
    }

    get capacity() {
        return this.daoInstance.capacity;
    }
    set capacity(val:number){
        this.daoInstance.capacity = val;
    }

    get description() {
        return this.daoInstance.description;
    }
    set description(val:string) {
        this.daoInstance.description = val;
    }

    private setDaoInstance(daoInst:any) {
        this.daoInstance = daoInst;
    }

    retrieve(id: string) {
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

    delete(id: string) {
        return RoomDao.dbModel.findByIdAndRemove(id)
            .then(() => {
            });
    }

    private static createFromDocumentInstance(doc:mongoose.Document) {
        let inst = new RoomDao(new Room(doc));
        inst.setDaoInstance(doc);
        return inst;
    }

    static getDbModel() {
        if(!RoomDao.dbModel) {
            RoomDao.dbModel = mongoose.model("Room",RoomDao.getMongooseSchema());
        }
        return RoomDao.dbModel;
    }

    static getMongooseSchema() {
        return new mongoose.Schema({
            name: {
                type:String,
                required:true
            },
            capacity: {
                type:String,
                required:true
            },
            description: {
                type: String,
                required:false
            }
        });
    }
}