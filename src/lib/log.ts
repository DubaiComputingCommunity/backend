const moment = require('moment');
const colors = require('colors');
import * as fs from 'fs';
export class Loggers {
    getTimeFormat(): string {
        let time: string;
        time = `[${moment().format("MMMM Do YYYY, h:mm:ss a")}]`;
        return time;
    }
    infoLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgCyan(colors.black(' INFO '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [INFO] ${message} \n`)
    }
    listenerLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgMagenta(colors.black(' LISTENER LOAD '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [LISTENER LOAD] ${message} \n`)
    }
    getLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgBlue(colors.black(' GET '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [GET] ${message}\n`)
    }
    postLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgBlue(colors.black(' POST '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [POST] ${message}\n`)
    }
    warnLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgYellow(colors.black(' WARN '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [WARN] ${message}\n`)
    }
    errorLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgRed(colors.black(' ERR '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [ERR] ${message}\n`)
    }
    debugLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgWhite(colors.black(' DEBUG '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [DEBUG] ${message}\n`)
    }
    initLog(message: any): void {
        console.log(`${colors.green(this.getTimeFormat())} ${colors.bgGreen(colors.black(' INIT '))} ${colors.white(message)}`);
        fs.appendFileSync(__dirname + '/../logs/latest.log', `${this.getTimeFormat()} [INIT] ${message}\n`)
    }

}
export class Utility {
    getLogDateName() {
        const date = new Date();
        const yr = date.getUTCFullYear();
        const mo = date.getUTCMonth();
        const da = date.getUTCDate();
        const mi = date.getUTCMinutes();
        const hr = date.getUTCHours();
        const se = date.getUTCSeconds();
        return `${yr}-${mo}-${da}T${hr}-${mi}-${se}.txt`;
    }
}

