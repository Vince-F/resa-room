"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apicore_1 = require("apicore");
class RoomApiAccessController extends apicore_1.PermissionManager {
    canExecuteAction(entity, action, req) {
        if (req.session && req.session.connected) {
            if (action !== "read" && req.session.userData.role !== "Admin") {
                return Promise.resolve({ status: 403, canAccess: false, reason: "Insufficient permission." });
            }
            else {
                return Promise.resolve({ canAccess: true });
            }
        }
        else {
            return Promise.resolve({ status: 401, canAccess: false, reason: "You need to authenticate." });
        }
    }
}
exports.RoomApiAccessController = RoomApiAccessController;
