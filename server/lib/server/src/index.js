"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const index_1 = require("./api/routes/index");
const databaseController_1 = require("./core/controllers/databaseController");
const usr_mgt_1 = require("usr-mgt");
const app = express();
app.use(bodyParser.json());
app.use(expressSession({
    secret: "hgurg89rg6e5r86f864f",
    resave: false,
    saveUninitialized: false
}));
let dbCtrl = new databaseController_1.DatabaseController("mongodb://localhost/resaroomdb");
dbCtrl.connect({})
    .then(() => {
    usr_mgt_1.UserManagementApi.instantiateApiAndGetRouters({ database: { url: "mongodb://localhost/resaroomdb", tableName: "AppUsers" } })
        .then((usrApiRouters) => {
        app.use("/api", index_1.router);
        app.use("/api/v1", index_1.router);
        app.use("/auth", usrApiRouters.authenticationRouter);
        app.use("/api/user", usrApiRouters.userApiRouter);
        app.use("/api/v1/user", usrApiRouters.userApiRouter);
        app.listen(3000, () => {
            console.log("Server is ready");
        });
    }).catch((error) => {
        console.error("Fatal error, fail to initialise user api", error);
        process.exit(1);
    });
}).catch(() => {
    console.error("Fatal error, fail to connect to database");
    process.exit(1);
});
