import { PermissionManager, ApiAccessResponse } from "apicore";
import express = require("express");
import { Reservation } from "../../../../common/models/reservation";
export declare class ReservationApiAccessController extends PermissionManager {
    canExecuteAction(entity: string, action: string, req: express.Request, data: Reservation): Promise<ApiAccessResponse>;
}
