import express = require("express");
import {RoomController} from "../controllers/roomController";

export let router = new express.Router();
const apiCtrl = new RoomController();

// READ
router.get("/",retrieveList);
router.get("/:id",retrieveOneById);

// CREATE
router.post("/",createOne);

// UPDATE
router.put("/:id",updateOneById);

// DELETE
router.delete("/:id",deleteOneById);

function createOne(req,res) {
    const data = req.body.data;

    apiCtrl.createRoom(data)
        .then((room) => {
            res.send({success:true,result:room,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to create room: " + error});
        });
} 

function deleteOneById(req,res) {
    const id = req.params.id;

    apiCtrl.deleteRoom(id)
        .then((success) => {
            res.send({success:success,count:0});
        }).catch((error) => {
            res.send({success:false,error:"Fail to delete room: " + error});
        })
}

function retrieveList(req,res) {
    apiCtrl.retrieveRoomList()
        .then((rooms) => {
            res.send({success:true,result:rooms,count:rooms.length});
        }).catch((error) => {
            res.send({success:false,error:"Fail to retrieve rooms: " + error});
        });
}

function retrieveOneById(req,res) {
    const id = req.params.id;

    apiCtrl.retrieveRoom(id)
        .then((room) => {
            res.send({success:true,result:room,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to retrieve room: " + error});
        });
}

function updateOneById(req,res) {
    const id = req.params.id;
    const data = req.body.data;

    apiCtrl.updateRoom(id,data)
        .then((room) => {
            res.send({success:true,result:room,count:1});
        }).catch((error) => {
            res.send({success:false,error:"Fail to update room: " + error});
        });
}