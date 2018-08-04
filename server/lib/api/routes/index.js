"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const reservation_1 = require("./reservation");
const room_1 = require("./room");
exports.router = express.Router();
exports.router.use("/room", room_1.router);
exports.router.use("/reservation", reservation_1.router);
