import express = require("express");
import bodyParser = require("body-parser");
import expressSession = require("express-session");
import { router } from "./api/routes/index";
import { DatabaseController } from "./core/controllers/databaseController";
import { UserManagementApi } from "usr-mgt";

const app = express();

app.use(bodyParser.json());
app.use(expressSession({
    secret: "hgurg89rg6e5r86f864f",
    resave: false,
    saveUninitialized: false
}));

let dbCtrl = new DatabaseController("mongodb://localhost/resaroomdb");
dbCtrl.connect({})
    .then(() => {
        UserManagementApi.instantiateApiAndGetRouters({ database: { url: "mongodb://localhost/resaroomdb", tableName: "AppUsers" } })
            .then((usrApiRouters) => {
                app.use("/api", router);
                app.use("/api/v1", router);
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