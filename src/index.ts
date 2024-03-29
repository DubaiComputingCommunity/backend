// --------------------------------------------------
// Imports
// --------------------------------------------------
import express from 'express' // Express Import

import * as fs from 'fs'; // File System Import
import * as http from 'http';
import * as https from 'https';

import { Loggers, Utility } from './lib/log'; // Logger Import
import { generateNewLogFile } from './lib/logManager';
import Gauntlet from './middleware/gauntlet/gauntlet'
// GET route-handler imports


// --------------------------------------------------
// Variables 
// --------------------------------------------------
const app = express(); // Express Application
const port = {
  "http": 9764,
  "https": 9765
}; // Port Numbers
const log = new Loggers; // Logger
const util = new Utility; // Utility
// --------------------------------------------------
// Express Settings
// --------------------------------------------------
app.use(express.json()); // Express JSON Parser
app.use(express.urlencoded({ extended: false })); // Express URL Encoded Parser


// --------------------------------------------------
// Log Updater 
// --------------------------------------------------
generateNewLogFile();

// --------------------------------------------------
// middleware
// --------------------------------------------------
app.use("/gauntlet", Gauntlet)
// --------------------------------------------------
// HTTP/HTTPS Server Creator
// --------------------------------------------------
const httpServer = http.createServer(app); log.initLog("HTTP Server Created");
const httpsServer = https.createServer({
    key: fs.readFileSync(__dirname + '/resources/private/ssl/cloudflare.key', 'utf8'),
    cert: fs.readFileSync(__dirname + '/resources/private/ssl/cloudflare.crt', 'utf8')
}, app); log.initLog("HTTPS Server Created");

// --------------------------------------------------
// HTTP/HTTPS Server Runner
// --------------------------------------------------
httpServer.listen(port.http, () => { log.initLog("HTTP Server Initalized on port " + port.http); });
httpsServer.listen(port.https, () => { log.initLog("HTTPS Server Initalized on port " + port.https); });

// --------------------------------------------------
// API Startup Log
// --------------------------------------------------
log.infoLog("|------------[DCC Website API]------------");
log.infoLog("")
log.infoLog("The API has been initalized");
log.infoLog("It is accessable on:")
log.infoLog("HTTPS https://localhost:9765")
log.infoLog("HTTP http://localhost:9764")
log.infoLog("")
log.infoLog("However, if this API is uploaded, it shall be found on:")
log.infoLog("HTTPS https://api.dcc.danky.dev:9765")
log.infoLog("HTTPS https://161.97.158.213:9765 (UNRECOMMENDED, DEBUG ONLY)")
log.infoLog("")
log.infoLog("|------------[DCC Website API]------------");

// Error Handler
process.on('uncaughtException', (err) => {
  log.errorLog("An error was encountered, Stacktrace:")
  log.errorLog(err.toString())
  log.errorLog("")
  log.errorLog("The API will continue running, but you should look into it.")
  log.errorLog("")
})
