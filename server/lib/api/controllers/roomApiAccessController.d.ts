import { PermissionManager, ApiAccessResponse } from "apicore";
import express = require("express");
export declare class RoomApiAccessController extends PermissionManager {
    canExecuteAction(entity: string, action: string, req: express.Request): Promise<ApiAccessResponse>;
}
