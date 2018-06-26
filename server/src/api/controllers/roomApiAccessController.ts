import {PermissionManager,ApiAccessResponse} from "apicore";
import express = require("express");

export class RoomApiAccessController extends PermissionManager {

    canExecuteAction(entity:string,action:string,req:express.Request):Promise<ApiAccessResponse> {
        if(req.session && req.session.connected) {
            if(action !== "read" && req.session.userData.role !== "Admin") {
                return Promise.resolve({status:403,canAccess:false,reason:"Insufficient permission."} as ApiAccessResponse)
            } else {
                return Promise.resolve({canAccess:true} as ApiAccessResponse);
            }
        } else {
            return Promise.resolve({status:401,canAccess:false,reason:"You need to authenticate."} as ApiAccessResponse)
        }
    }
    
}