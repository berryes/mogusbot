const { Client, Intents, Collection, message,  } = require("discord.js");
const fs = require("fs");
const Discord = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Collection();
const noprefixCommand = new Collection()

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`🔧 | Loaded  ${commandName} | PREFIX COMMAND`);
  client.commands.set(commandName, command);
}


// reads all the non prefix commands from the folder and puts them into an array of noprefixCommand
const noprefixes = fs.readdirSync("./noprefix").filter(file => file.endsWith(".js"));
for (const file of noprefixes) {
  const noprefixName = file.split(".")[0];
  const noprefix = require(`./noprefix/${file}`);

  console.log(`🔧 | Loaded ${noprefixName} | NON PREFIX COMMAND`);
  noprefixCommand.set(noprefixName, noprefix);
}

client.login(config.token);



//exports the noprefixCommand array so you can import them on another js file
module.exports = noprefixCommand
console.log('--- Mogusbot succesfully ran! ---')
