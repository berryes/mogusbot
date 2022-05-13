const { Client, Intents, Collection  } = require("discord.js");
const fs = require("fs");
const Discord = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_VOICE_STATES ]
});
require("dotenv").config();


if (!process.env.API_KEY){
  console.log('NO API KEY ATTACHED')
}

// start off rich presence
const listeningList = ["mogusbeats",
"spotify",
"Among drip 10 hour bass boosted sussy baka edition premium plus x ++ pro ultimate superior X+ S",
"red discussing why he is not the imposter",
]
const watchingList = ["over the server",
"you",
"as red climbes out of the vent. sussy",
"the tv",
"your dogs",
"the impostor getting killed"
]
function watching(){
  var richValue = Math.floor(Math.random() * watchingList.length);
  client.user.setActivity(`${watchingList[richValue]}`, {
    type: "WATCHING",
  });
}
function listening(){
  var richValue = Math.floor(Math.random() * listeningList.length);
  client.user.setActivity(`${listeningList[richValue]}`, {
    type: "LISTENING",
  });
}
function radnomRichpresence(){
  var random = Math.floor(Math.random() * 2);
  if (random == 1){
    listening()
  }
  if (random ==2 ){
    watching()
  }
}
setInterval(radnomRichpresence, 900000);
// end of random rich presence

// Command's list
client.commands = new Collection();
const functionMap = new Collection()
const commandListus = []
// -----------

// Imports events from events folder, dynamicly
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  console.log('\x1b[36m%s\x1b[0m',` 🔧 Loaded an event | ${eventName}`);
  client.on(eventName, event.bind(null, client));
}

// Imports events from events folder, dynamicly

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const commandfile of commands) {
  const commandName = commandfile.split(".")[0];
  const command = require(`./commands/${commandfile}`);

  console.log('\x1b[32m%s\x1b[0m',`🔧 Loaded a command | ${commandName}`);
  commandListus.push(commandName)
  client.commands.set(commandName, command);
}


// reads all the non prefix commands from the folder and puts them into an array of noprefixCommand
const functions = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
for (const functionFile of functions) {
  const functionName = functionFile.split(".")[0];
  const functionus = require(`./functions/${functionFile}`);
  functionMap.set(functionName, functionus);
}


client.login(process.env.API_KEY);

//exports the noprefixCommand,NoprefixList and ect array so you can import them on another js file
module.exports = [functionMap, commandListus,,]




// 
// ░░░░░░░░░░░░░░░░░█████░░░░░░░░░░░░░░░░░░
// ░░░░░░░░░░░░░████░░░░░███░░░░░░░░░░░░░░░
// ░░░░██████████░░░░░░████████████░░░░░░░░
// ░░░░█░░░░░░░█░░░░████░░░░░░░░░░██░░░░░░░
// ░░░██░░░░░░██░░░░░█░░░░░░░░░░░██░░░░░░░░
// ░░░█░░░░░░░█░░░░░░███░░░░░█████░░░░░░░░░
// ░░░░█░░░░░░█░░░░░░░░░███████░░░░░░░░░░░░
// ░░░░░███████░░░░░░░░░░░░░░░█░░░░░░░░░░░░
// ░░░░░░░░░░░█░░░███████░░░░░█░░░░░░░░░░░░
// ░░░░░░░░░░░█░░░█░░░░░█░░░░░█░░░░░░░░░░░░
// ░░░░░░░░░░░█░░░█░░░░░█░░░░█░░░░░░░░░░░░░
// ░░░░░░░░░░░█░░░█░░░░░█░░░░█░░░░░░░░░░░░░
// ░░░░░░░░░░░█░░░█░░░░░█░░░░█░░░░░░░░░░░░░
// ░░░░░░░░░░░█░░░█░░░░░██████░░░░░░░░░░░░░
// ░░░░░░░░░░░█████░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

