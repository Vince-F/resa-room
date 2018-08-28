import { PermissionManager, ApiAccessResponse } from "apicore";
import express = require("express");
import { Reservation } from "resa-room-common/lib/reservation";

export class ReservationApiAccessController extends PermissionManager {
    canExecuteAction(entity: string, action: string, req: express.Request, data:Reservation): Promise<ApiAccessResponse> {
        if (req.session && req.session.connected) {
            switch (action) {
                case "create":
                case "read":
                    return Promise.resolve({ canAccess: true } as ApiAccessResponse);
                case "cancel":
                case "update":
                    if (req.session.userData.role === "Admin" || req.session.userData.login === data.authorId) {
                        return Promise.resolve({ canAccess: true } as ApiAccessResponse);
                    } else {
                        return Promise.resolve({ canAccess: false, status: 403, reason: "Insufficient permissions." } as ApiAccessResponse);
                    }
                case "delete":
                    if (req.session.userData.role === "Admin") {
                        return Promise.resolve({ canAccess: true } as ApiAccessResponse);
                    } else {
                        return Promise.resolve({ canAccess: false, status: 403, reason: "Insufficient permissions." } as ApiAccessResponse);
                    }
                default:
                    return Promise.resolve({ canAccess: false, status: 404, reason: "Unknown action" } as ApiAccessResponse);
            }
        } else {
            return Promise.resolve({ status: 401, canAccess: false, reason: "You need to authenticate." } as ApiAccessResponse)
        }
    }
}