import { createConnection } from "typeorm";
import { Gauntlet } from "../../../entity/Gauntlet";
import { Loggers } from "../../../lib/log";
import { v4 as uuidv4 } from "uuid";

const log = new Loggers();

export function newGauntletHandler(req: any, res: any) {
    createConnection()
        .then(async connection => {
            let gauntlet = new Gauntlet();
            gauntlet.name = req.body.name;
            gauntlet.description = req.body.description;
            gauntlet.rank = req.body.rank;
            gauntlet.uuid = uuidv4();
            gauntlet.date = new Date().toString();            
            gauntlet.deleted = false;
            await connection.manager.save(gauntlet);
            log.infoLog('------------------')
            log.infoLog(log.bold("New Gauntlet Saved"))
            log.infoLog("Name: " + req.body.name)
            log.infoLog("Description: " + req.body.description)
            log.infoLog("Rank: " + req.body.rank)
            log.infoLog("------------------")
            res.status(200).send()
            connection.close().then(() => log.infoLog("Closed connection to database (Function newGauntletHandler())"));
        }).catch(error => {
            log.errorLog(error)
            res.status(500).send()
        })
}
/*
Expected JSON structure

{
    "name": "Gauntlet Name",
    "description": "Gauntlet Description",
    "rank": "rank",
}



*/