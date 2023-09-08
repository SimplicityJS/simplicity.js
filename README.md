# simplicity.js
A simple to use discord package that makes advanced bots

## Example Usage (index.js)
```js
import { LoadCommands, Client , events } from 'simplicityjs';
import { builder } from '@simplicityjs/builder'

Client.Initialize({
    'token': 'discord bot token', //or 'token': config.token,
    'prefix': '!', //or 'prefix': config.prefix,
    'ownerid': config.client.ownerid,
});

//Load Commands
LoadCommands('./commands');
LoadSlashCommands('./commands/slashes');

// Events
events.onMessage();
events.updatePresence(`
text: Example,
type: watching,
status: online,
time: 8
`);

builder.Load('./commands');`
