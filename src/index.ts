import { AppDataSource } from "./data-source"
import * as express from 'express'//importing express library in express variable
import * as BodyParse from 'body-parser'
import * as cors from 'cors'
import postRouter from './routes/postRouter'
import { createConnection } from "typeorm"
var log4js = require("log4js");
var logger = log4js.getLogger();

logger.level = "debug";
logger.debug("Some debug messages");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

createConnection(AppDataSource.options).then(async () => {//we are connecting for data-source.ts

    const app = express()//used to create server
    app.use(cors())//used to connect to frontend

    app.use(BodyParse.json())//used to get data in json format

    app.use('/', postRouter)//used to provide default router and perform operation in postRouter

    app.listen(8001, () => {
        console.log("Application Started at 8001 port..")//to check server is running in that port
    })
}).catch(error => console.log(error))
