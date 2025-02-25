/* -------------------------------------------------------------------------- */
/*                            Imports and Requires                            */
/* -------------------------------------------------------------------------- */
const chalk = require('chalk'); // Chalk v4.1.2 Should Work Here

/* -------------------------------------------------------------------------- */
/*                          Settings and Customizers                          */
/* -------------------------------------------------------------------------- */

// Settings Table
const settings = {
    reminderConfig: true,
    ErrorColor: "red",
    MessageColor: "white",
    TimestampColor: "black",
    ServerColor: "black",
    TimestampBGColor: "purple",
    ServerBGColor: "green",
    ServerName: "NewfiesJS"
};

// Settings Config Function
function config(option, value) {
    if (settings.hasOwnProperty(option)) {
        settings[option] = value;
        // console.log(`Set ${option} to ${value}`)
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
function njsLog(message, type = "info") {
    const timestamp = new Date().toLocaleTimeString();
    const formattedTimestamp = chalk.bgKeyword(settings.TimestampBGColor).keyword(settings.TimestampColor)(` ${timestamp} `);
    const formattedServer = chalk.bgKeyword(settings.ServerBGColor).keyword(settings.ServerColor)(` [${settings.ServerName}] `);
    
    let formattedMessage;
    switch (type) {
        case "error":
            formattedMessage = chalk.keyword(settings.ErrorColor)(message);
            break;
        default:
            formattedMessage = chalk.keyword(settings.MessageColor)(message);
    }
    
    console.log(`${formattedTimestamp} | ${formattedServer} ${formattedMessage}`);
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
module.exports = { chalk, settings, config, njsLog };
