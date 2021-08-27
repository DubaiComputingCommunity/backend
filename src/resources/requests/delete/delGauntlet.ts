import { createConnection, getRepository } from "typeorm";
import { Gauntlet } from "../../../entity/Gauntlet";
import { Loggers } from "../../../lib/log";

const log = new Loggers();

export function delGauntlet(req: any, res: any) {
    const id = req.query.id;
    if (!id) {
        res.status(400).send("Missing ID query parameter");
    } else {
        createConnection()
            .then(async connection => {
                const result = await connection
                    .getRepository(Gauntlet)
                    .createQueryBuilder("g")
                    .where("g.id = :id", { id: id })
                    .getOne();
                if (result != null) {
                await connection
                    .createQueryBuilder()
                    .delete()
                    .from(Gauntlet)
                    .where("id = :ide", { ide: id })
                    .execute()
                    .then(() => {
                        res.status(204).send();
                        connection.close()
                    });
                } else {
                    connection.close()
                    res.status(404).send("No Gauntlet exists with such ID");
                    return;
                }
            }).catch(e => {
                log.errorLog(e);
                res.status(500).send(e);

            })

    }
}