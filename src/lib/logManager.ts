import * as fs from 'fs'; // File System Import
import { Loggers, Utility } from './log'; // Logger Import
const log = new Loggers; // Logger
const util = new Utility; // Utility

export function generateNewLogFile() {
    if (!fs.existsSync(__dirname + '/../logs/')) { 
        fs.mkdirSync(__dirname + '/../logs/'); 
    }
        
    if (fs.existsSync(__dirname + "/../logs/latest.log")) {
        let name = util.getLogDateName();
        log.infoLog('Renaming previous log file...')
        fs.renameSync(__dirname + "/../logs/latest.log", __dirname + "/../logs/" + name)
        log.infoLog('Renamed')
        fs.writeFileSync(__dirname + "/../logs/latest.log", '');
        log.infoLog('New latest.log created');
    } else {
        log.infoLog('Created new latest.log')
        fs.writeFileSync(__dirname + "/../logs/latest.log", '');
    }
}