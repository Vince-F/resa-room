import {Room} from "../../../common/models/room";

export class RoomController {
    testData:Map<string,Room>;

    constructor() {
        this.testData = new Map();
    }

    createRoom(data:any) : Promise<Room> {
        return new Promise((resolve,reject) => {
            try {
                data._id = Math.floor(Math.random() * 1000000000).toString(36);
                let newRoom = new Room(data);
                this.testData.set(data._id,newRoom);
                resolve(newRoom);
            } catch(error) {
                reject("Fail to create room, error: " + error);
            }
        });
    }

    retrieveRoom(id:string):Promise<Room> {
        return new Promise((resolve,reject) => {
            if(this.testData.has(id)) {
                resolve(this.testData.get(id));
            } else {
                reject("No room with ID " + id + " exists");
            }
        });
    }

    retrieveRoomList() : Promise<Array<Room>> {
        return new Promise((resolve,reject) => {
            resolve(Array.from(this.testData.values()));
        });
    }

    updateRoom(id:string,data:any):Promise<Room> {
        return new Promise((resolve,reject) => {
            if(this.testData.has(id)) {
                let previousData = this.testData.get(id);
                data._id = previousData;
                try {   
                    let updatedRoom = new Room(data);
                    this.testData.set(data._id,updatedRoom);
                    resolve(updatedRoom);
                } catch(error) {
                    reject("Fail to update room, error: " + error);
                }
            } else {
                reject("No room with ID " + id + " exists");
            }
        });
    }

    deleteRoom(id:string):Promise<boolean> {
        return new Promise((resolve,reject) => {
            if(this.testData.has(id)) {
                this.testData.delete(id);
                resolve(true);
            } else {
                reject("No room with ID " + id + " exists");
            }
        });
    }
}