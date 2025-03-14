/* -------------------------------------------------------------------------- */
/*                            Imports and Requires                            */
/* -------------------------------------------------------------------------- */
const chalk = require('chalk'); // Chalk v4.1.2
const fs = require('fs'); // File System for Logging

/* -------------------------------------------------------------------------- */
/*                          Settings and Customizers                          */
/* -------------------------------------------------------------------------- */

// Settings Table
const settings = {
    reminderConfig: true,
    ErrorColor: "red",
    MessageColor: "white",
    TimestampColor: "white",
    TimestampBGColor: "purple",
    LogFilePath: "logs.txt"
};

// Settings Config Function
function config(option, value) {
    if (settings.hasOwnProperty(option)) {
        settings[option] = value;
    } else {
        console.warn(`Unknown setting: ${option}`);
    }
}

/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */
const clog = console.log;

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
function njsLog(message, forcedColor = null, type = "info") {
    const timestamp = new Date().toLocaleTimeString();
    const formattedTimestamp = chalk.bgKeyword(settings.TimestampBGColor).keyword(settings.TimestampColor)(`${timestamp}`);
    
    let formattedMessage;
    // Check if a forced color is provided
    if (forcedColor) {
        formattedMessage = chalk.keyword(forcedColor)(message);
    } else {
        // Default message handling based on type
        switch (type) {
            case "error":
                formattedMessage = chalk.keyword(settings.ErrorColor)(message);
                break;
            default:
                formattedMessage = chalk.keyword(settings.MessageColor)(message);
        }
    }
    
    console.log(`[${formattedTimestamp}] | ${formattedMessage}`);
    logToFile(`${timestamp} | ${message}`, type);
}

function logToFile(logMessage, type) {
    const logEntry = `[${type.toUpperCase()}] ${logMessage}\n`;
    fs.appendFile(settings.LogFilePath, logEntry, (err) => {
        if (err) console.error("Failed to write to log file:", err);
    });
}


/* -------------------------------------------------------------------------- */
/*                                    Misc                                    */
/* -------------------------------------------------------------------------- */
setTimeout(function(){
    if (settings.reminderConfig == true){
        njsLog("Make Custom Changes To NewfiesJS By Using njs.config(setting, value)")
        njsLog("You can hide these messages by using njs.config('reminderConfig', false)")
    }
}, 1000);


/* -------------------------------------------------------------------------- */
/*                                  Exporting                                 */
/* -------------------------------------------------------------------------- */
module.exports = { chalk, fs, settings, config, njsLog, logToFile };
