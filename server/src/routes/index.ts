import express = require("express");
import {router as reservationRouter} from "./reservation"
import {router as roomRouter} from "./room";

export let router:express.Router = express.Router();

router.use("/room",roomRouter);
router.use("/reservation",reservationRouter);
