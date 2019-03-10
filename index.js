const discord = require(`discord.js`);
const client = new discord.Client();
require(`./functions`);

client.on(`ready`, () => {
    console.log(`I'm ready !`);
});

client.login(`token`);
