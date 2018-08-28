"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apicore_1 = require("apicore");
class ReservationApiAccessController extends apicore_1.PermissionManager {
    canExecuteAction(entity, action, req, data) {
        if (req.session && req.session.connected) {
            switch (action) {
                case "create":
                case "read":
                    return Promise.resolve({ canAccess: true });
                case "cancel":
                case "update":
                    if (req.session.userData.role === "Admin" || req.session.userData.login === data.authorId) {
                        return Promise.resolve({ canAccess: true });
                    }
                    else {
                        return Promise.resolve({ canAccess: false, status: 403, reason: "Insufficient permissions." });
                    }
                case "delete":
                    if (req.session.userData.role === "Admin") {
                        return Promise.resolve({ canAccess: true });
                    }
                    else {
                        return Promise.resolve({ canAccess: false, status: 403, reason: "Insufficient permissions." });
                    }
                default:
                    return Promise.resolve({ canAccess: false, status: 404, reason: "Unknown action" });
            }
        }
        else {
            return Promise.resolve({ status: 401, canAccess: false, reason: "You need to authenticate." });
        }
    }
}
exports.ReservationApiAccessController = ReservationApiAccessController;
