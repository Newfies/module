/* -------------------------------------------------------------------------- */
/*                            Imports and Requires                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          Settings and Customizers                          */
/* -------------------------------------------------------------------------- */

// Settings Table
const settings = {
    logColorError: 'red',
    logReminderColor: 'pink',
    reminderConfig: true
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
/*                                    Misc                                    */
/* -------------------------------------------------------------------------- */
function checkReminder(){
    if (settings.reminderConfig == true){
        console.log("Make Custom Changes To NewfiesJS By Using njs.config(setting, value)")
    }
}

checkReminder();

/* -------------------------------------------------------------------------- */
/*                                  Exporting                                 */
/* -------------------------------------------------------------------------- */
module.exports = { settings, config, checkReminder };
