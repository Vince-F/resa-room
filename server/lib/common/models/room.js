"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Room {
    constructor(data) {
        if (typeof data !== "object" || data === null) {
            throw new TypeError("Cannot create room instance, data is undefined");
        }
        this._id = data._id;
        this.description = data.description;
        if (typeof data.name !== "string") {
            throw new TypeError("Cannot create room instance, data must have a name field, and this field must be a string");
        }
        else {
            this.name = data.name;
        }
    }
}
exports.Room = Room;
