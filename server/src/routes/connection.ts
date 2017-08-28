import * as express from "express";
import {ConnectionManager} from "../controllers/connectionManager";

export let router:express.Router = express.Router();
const apiCtrl = new ConnectionManager();

// READ
router.get("/retrieveSession",retrieveSession);

router.post("/connect",connect);
router.post("/disconnect",disconnect);

router.post("/debug/connectUser",debugConnectUser);
router.post("/debug/connectAdmin",debugConnectAdmin);

function connect(req:express.Request,res:express.Response) {
    const login = req.body.login;
    const password = req.body.password;

    apiCtrl.connectUser(login,password)
        .then((userSession) => {
            res.send({result:userSession,success:true});
        }).catch((error) => {
            res.send({error:error,success:false});
        });
}

function disconnect(req:express.Request,res:express.Response) {
    apiCtrl.disconnectUser(req.session)
        .then((userSession) => {
            res.send({result:userSession,success:true});
        }).catch((error) => {
            res.send({success:false,error:error});
        });
}

function retrieveSession(req:express.Request,res:express.Response) {
    apiCtrl.retrieveSession()
        .then((userSesion) => {
            res.send({result:userSesion,success:true});
        }).catch((error) => {
            res.send({success:false,error:error});
        });
}

function debugConnectUser(req:express.Request,res:express.Response) {
    apiCtrl.debugConnectUser()
        .then((userSesion) => {
            res.send({result:userSesion,success:true});
        }).catch((error) => {
            res.send({success:false,error:error});
        });
}

function debugConnectAdmin(req:express.Request,res:express.Response) {
    apiCtrl.debugConnectAdmin()
        .then((userSesion) => {
            res.send({result:userSesion,success:true});
        }).catch((error) => {
            res.send({success:false,error:error});
        });
}