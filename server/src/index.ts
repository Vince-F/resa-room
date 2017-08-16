import express = require("express");
import bodyParser = require("body-parser");
import expressSession = require("express-session");
import {router} from "./routes/index";

const app = express.app();

app.use(bodyParser.json());
app.use(expressSession());

app.use("/api",router);
app.use("/api/v1",router);

app.listen(3000,() => {

});