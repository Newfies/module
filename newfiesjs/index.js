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
};

// [Timestamp] | [Server] - [Message]
// ErrorColor, Message Color, Timestamp Text Color, Server Text Color, 
// These Are Ideas Until I Impliment

// Settings Config Function
function config(option, value) {
    if (settings.hasOwnProperty(option)) {
        settings[option] = value;
        console.log(`Set ${option} to ${value}`)
    } else {
        console.warn(`Unknown setting: ${option}`);
    }
}

/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */
const clog = console.log;

/* -------------------------------------------------------------------------- */
/*                                    Misc                                    */
/* -------------------------------------------------------------------------- */
setTimeout(function(){
    if (settings.reminderConfig == true){
        console.log("Make Custom Changes To NewfiesJS By Using njs.config(setting, value)")
        console.log("You can hide these messages by using njs.config('reminderConfig', false)")
    }
}, 1000);


/* -------------------------------------------------------------------------- */
/*                                  Exporting                                 */
/* -------------------------------------------------------------------------- */
module.exports = { chalk, settings, config };
