import { PermissionManager, ApiAccessResponse } from "apicore";
import express = require("express");
import { Reservation } from "resa-room-common/lib/reservation";
export declare class ReservationApiAccessController extends PermissionManager {
    canExecuteAction(entity: string, action: string, req: express.Request, data: Reservation): Promise<ApiAccessResponse>;
}
