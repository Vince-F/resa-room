import express = require("express");
import {ReservationController} from "../controllers/reservationController";

export let router:express.Router = express.Router();
const apiCtrl = new ReservationController();

// READ
router.get("/",retrieveList);
router.get("/:id",retrieveOneById);

// CREATE
router.post("/",createOne);

// UPDATE
router.put("/:id",updateOneById);
router.put("/:id/accept",acceptReservation);
router.put("/:id/decline",declineReservation);

// DELETE
router.delete("/:id",deleteOneById);

function acceptReservation(req:express.Request,res:express.Response) {
    res.send(500);
}

function createOne(req:express.Request,res:express.Response) {
    const data = req.body.data;

    apiCtrl.createReservation(data)
        .then((reservation) => {
            res.send({success:true,result:reservation,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to create reservation: " + error});
        });
} 

function declineReservation(req:express.Request,res:express.Response) {
    res.send(500);
}


function deleteOneById(req:express.Request,res:express.Response) {
    const id = req.params.id;

    apiCtrl.deleteReservation(id)
        .then((success) => {
            res.send({success:success,count:0});
        }).catch((error) => {
            res.send({success:false,error:"Fail to delete reservation: " + error});
        })
}

function retrieveList(req:express.Request,res:express.Response) {
    const filters = req.query;

    apiCtrl.retrieveReservationList(filters)
        .then((reservations) => {
            res.send({success:true,result:reservations,count:reservations.length});
        }).catch((error) => {
            res.send({success:false,error:"Fail to retrieve reservations: " + error});
        });
}

function retrieveOneById(req:express.Request,res:express.Response) {
    const id = req.params.id;

    apiCtrl.retrieveReservation(id)
        .then((reservation) => {
            res.send({success:true,result:reservation,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to retrieve reservation: " + error});
        });
}

function updateOneById(req:express.Request,res:express.Response) {
    const id = req.params.id;
    const data = req.body.data;

    apiCtrl.updateReservation(id,data)
        .then((reservation) => {
            res.send({success:true,result:reservation,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to update reservation: " + error});
        });
}