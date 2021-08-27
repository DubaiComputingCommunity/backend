import { createConnection, getRepository, createQueryBuilder } from "typeorm";
import { Gauntlet } from "../../../entity/Gauntlet";
import { Loggers } from "../../../lib/log";
const log = new Loggers();

export function getLatestGauntlets(req: any, res: any) {
    createConnection()
        .then(async connection => {
            if (req.query.amnt) {
                const result = await connection
                    .getRepository(Gauntlet)
                    .createQueryBuilder("gauntlet")
                    .orderBy("gauntlet.id", "ASC")
                    .limit(req.query.amnt)
                    .getMany();
                connection.close()
                res.status(200).send(JSON.stringify(result))
            } else {
                const result = await connection
                    .getRepository(Gauntlet)
                    .createQueryBuilder("gauntlet")
                    .orderBy("gauntlet.id", "ASC")
                    .limit(10)
                    .getMany();
                connection.close()
                res.status(200).send(JSON.stringify(result))
            }
            connection.close()
        }).catch(error => {
            log.errorLog(error)
            res.status(500).send()
        })
}
export function getGauntletById(req: any, res: any) {
    createConnection()
        .then(async connection => {
            if (req.query.id) {
                let result = await connection
                    .getRepository(Gauntlet)
                    .findOne(req.query.id)
                if (result == null) {
                    res.status(404).send("There is no gauntlet with ID " + req.query.id)
                    connection.close()
                    return;

                }
                res.status(200).send(result)
                connection.close()
            } else {
                res.status(400).send("You did not specify an ID of the Gauntlet you would like")
                connection.close();
            }
        }).catch(error => {
            log.errorLog(error)
            res.status(500).send()
            
        }
        )
}