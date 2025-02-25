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