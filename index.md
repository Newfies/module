# NewfiesJS

### NewfiesJS Dependencies
	 
	chalk@4.1.2
	fs

### Install NewfiesJS

    npm install newfiesjs
	npm install chalk@4.1.2

<hr>

# Using NewfiesJS

### Define NewfiesJS
	
	const njs = require("newfiesjs")

# NewfiesJS Customization

### Whats Configurable?

| Setting         | Allowed Values                                   | Default      |
|-----------------|--------------------------------------------------|--------------|
| reminderConfig  | `true` / `false`                                 | `true`       |
| ErrorColor      | Any color supported by Chalk for text            | `red`        |
| MessageColor    | Any color supported by Chalk for text            | `white`      |
| TimestampColor  | Any color supported by Chalk for text            | `white`      |
| TimestampBGColor| Any color supported by Chalk for text backgrounds| `purple`     |
| LogFilePath     | Any valid file path                              | `logs.txt`   |

<hr>

# NewfiesJS Usage Examples

## Logging System

	njs.njsLog(message, forced color, message type);

|   Parameter  |             Allowed Values            | Default Value                                 | Required |
|:------------:|:-------------------------------------:|-----------------------------------------------|----------|
|    Message   |                  any                  | ``N/A``                                       | ✅        |
| Forced Color | Any color supported by Chalk for text | ``null`` / ``MessageColor`` / ``ErrorColor``  | ❎        |
| Message Type | ``info`` / ``error``                  | ``info``                                      | ❎        |


### Logging System - App.Listen

	app.listen(port, () => {
    	njs.njsLog(`Server is running on port ${port}`);
	});

### Logging System - Errors

	njs.njsLog("Someone went somewhere they shouldn't have gone", "red", "error");

### Logging System - Info

	njs.njsLog("Someone did something cool", "pink", "info");