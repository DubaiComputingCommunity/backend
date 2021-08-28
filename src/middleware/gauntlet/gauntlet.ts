import {delGauntlet} from './modules/delGauntlet'
import {getGauntletById, getLatestGauntlets} from './modules/getGauntlets'
import {newGauntletHandler} from './modules/newGauntlet'
import {Loggers} from '../../lib/log'
import express from 'express'

const gauntletRouter = express.Router();
const log = new Loggers();

gauntletRouter.get('/getPrevious', (req: any, res: any, err: any) => { if (err) { log.errorLog(err) } getLatestGauntlets(req, res), log.getLog("/gauntlet/getPrevious from IP " + req.ip) });
gauntletRouter.get('/getGauntletByID', (req: any, res: any, err: any) => { if (err) { log.errorLog(err) } getGauntletById(req, res), log.getLog("/gauntlet/getGauntletByID from IP " + req.ip) });

// --------------------------------------------------
// POST Handlers 
// --------------------------------------------------
gauntletRouter.post('/new', (req: any, res: any, err: any) => { if (err) { log.errorLog(err) } newGauntletHandler(req, res), log.postLog("/gauntlet/new from IP " + req.ip) });

// --------------------------------------------------
// DELETE Handlers
// --------------------------------------------------
gauntletRouter.delete('/delete', (req: any, res: any, err: any) => { if (err) { log.errorLog(err) } delGauntlet(req, res), log.deleteLog("/gauntlet/delete from IP " + req.ip) });

export default gauntletRouter;