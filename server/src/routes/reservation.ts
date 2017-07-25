import express = require("express");
import {ReservationController} from "../controllers/reservationController";

export let router = new express.Router();
const apiCtrl = new ReservationController();

// READ
router.get("/",retrieveList);
router.get("/:id",retrieveOneById);
router.get("/byUser/:userId",retrieveListForUser);

// CREATE
router.post("/",createOne);

// UPDATE
router.put("/:id",updateOneById);

// DELETE
router.delete("/:id",deleteOneById);

function createOne(req,res) {
    const data = req.body.data;

    apiCtrl.createReservation(data)
        .then((reservation) => {
            res.send({success:true,result:reservation,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to create reservation: " + error});
        });
} 

function deleteOneById(req,res) {
    const id = req.params.id;

    apiCtrl.deleteReservation(id)
        .then((success) => {
            res.send({success:success,count:0});
        }).catch((error) => {
            res.send({success:false,error:"Fail to delete reservation: " + error});
        })
}

function retrieveList(req,res) {
    apiCtrl.retrieveReservationList()
        .then((reservations) => {
            res.send({success:true,result:reservations,count:reservations.length});
        }).catch((error) => {
            res.send({success:false,error:"Fail to retrieve reservations: " + error});
        });
}

function retrieveListForUser(req,res) {
    const userId = req.params.userId;
    
    apiCtrl.retrieveReservationListForUser(userId)
        .then((reservations) => {
            res.send({success:true,result:reservations,count:reservations.length});
        }).catch((error) => {
            res.send({success:false,error:"Fail to retrieve reservations: " + error});
        });
}

function retrieveOneById(req,res) {
    const id = req.params.id;

    apiCtrl.retrieveReservation(id)
        .then((reservation) => {
            res.send({success:true,result:reservation,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to retrieve reservation: " + error});
        });
}

function updateOneById(req,res) {
    const id = req.params.id;
    const data = req.body.data;

    apiCtrl.updateReservation(id,data)
        .then((reservation) => {
            res.send({success:true,result:reservation,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to update reservation: " + error});
        });
}