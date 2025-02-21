/* -------------------------------------------------------------------------- */
/*                            Imports and Requires                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          Settings and Customizers                          */
/* -------------------------------------------------------------------------- */

// Settings Table
const settings = {
    reminderConfig: true
};

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
module.exports = { settings, config };
