

export class ConnectionManager {
    connectUser(login:string,password:string):Promise<any> {
        return Promise.reject("Not implemented");
    }

    disconnectUser(reqSession:any):Promise<any> {
        return Promise.reject("Not Implemented");
    }

    debugConnectUser() {
        return Promise.reject("Not Implemented");
    }

    debugConnectAdmin() {
        return Promise.reject("Not Implemented");
    }

    retrieveSession():Promise<any> {
        return Promise.reject("Not Implemented");
    }
}
