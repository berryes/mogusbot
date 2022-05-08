const { Client, Intents, Collection, setActivity  } = require("discord.js");
const fs = require("fs");
const Discord = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


// start off rich presence
const listeningList = ["mogusbeats",
"spotify",
"red discussing why he is not the imposter",
]
const watchingList = ["over the server",
"you",
"your dogs",
"the impostor getting killed"
]
function listening(){
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
// IK ITS RETARDED SPAGHETTI CODE BUT IT WORKS FAG OFF :c


const config = require("./config.json");
client.config = config;



// Command's list
client.commands = new Collection();
const noprefixCommand = new Collection()
const noprefixList = []
const commandListus = []
// -----------

// Imports events from events folder, dynamicly
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

// Imports events from events folder, dynamicly

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const commandfile of commands) {
  const commandName = commandfile.split(".")[0];
  const command = require(`./commands/${commandfile}`);

  console.log(`🔧 | Loaded  ${commandName} | PREFIX COMMAND`);
  commandListus.push(commandName)
  client.commands.set(commandName, command);
}


// reads all the non prefix commands from the folder and puts them into an array of noprefixCommand
const noprefixes = fs.readdirSync("./noprefix").filter(file => file.endsWith(".js"));
for (const noprefixFile of noprefixes) {
  const noprefixName = noprefixFile.split(".")[0];
  const noprefix = require(`./noprefix/${noprefixFile}`);

  console.log(`🔧 | Loaded ${noprefixName} | NON PREFIX COMMAND`);
  noprefixCommand.set(noprefixName, noprefix);
  noprefixList.push(noprefixName)
}


client.login(config.token);

//exports the noprefixCommand,NoprefixList and ect array so you can import them on another js file
module.exports = [noprefixCommand, noprefixList, commandListus]




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


console.log(`
 ██████   ██████                                                 █████               █████   
░░██████ ██████                                                 ░░███               ░░███    
 ░███░█████░███   ██████   ███████ █████ ████  █████             ░███████   ██████  ███████  
 ░███░░███ ░███  ███░░███ ███░░███░░███ ░███  ███░░   ██████████ ░███░░███ ███░░███░░░███░   
 ░███ ░░░  ░███ ░███ ░███░███ ░███ ░███ ░███ ░░█████ ░░░░░░░░░░  ░███ ░███░███ ░███  ░███    
 ░███      ░███ ░███ ░███░███ ░███ ░███ ░███  ░░░░███            ░███ ░███░███ ░███  ░███ ███
 █████     █████░░██████ ░░███████ ░░████████ ██████             ████████ ░░██████   ░░█████ 
░░░░░     ░░░░░  ░░░░░░   ░░░░░███  ░░░░░░░░ ░░░░░░             ░░░░░░░░   ░░░░░░     ░░░░░  
                          ███ ░███                                                           
                         ░░██████                                                            
                          ░░░░░░                                                             
`)
console.log('made by berryes(https://github.com/berryes/mogusbot)')

