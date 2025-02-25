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

- reminderConfig [true/false]
- ErrorColor [any color supported by chalk for text]
- MessageColor [any color supported by chalk for text]
- TimestampColor [any color supported by chalk for text]
- TimestampBGColor [any color supported by chalk for text backgrounds]
- LogFilePath [any file path]

| Setting         | Allowed Values                                   | Default      |
|-----------------|--------------------------------------------------|--------------|
| reminderConfig  | `true` / `false`                                 | `true`       |
| ErrorColor      | Any color supported by Chalk for text            | `red`        |
| MessageColor    | Any color supported by Chalk for text            | `white`      |
| TimestampColor  | Any color supported by Chalk for text            | `white`      |
| TimestampBGColor| Any color supported by Chalk for text backgrounds| `purple`     |
| LogFilePath     | Any valid file path                              | `logs.txt`   |