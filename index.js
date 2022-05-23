const { Client, Intents, Collection,MessageEmbed  } = require("discord.js");
const fs = require("fs");
const Discord = require('discord.js');
const { Player } = require("discord-music-player");
const express = require('express')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_VOICE_STATES, ]
});
require("dotenv").config();
const Keyv = require("keyv")
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

currentDate = new Date()
const date = "[" + currentDate.getFullYear()+ "/" + currentDate.getMonth() + "/" + currentDate.getDate() + "] "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()

// inside a command, event listener, etc.



const app = express()
const cors = require("cors")
app.use(express.json())
const port = process.env.API_PORT
app.use(cors());

app.listen(port, () => {
  console.log(`API Server is running on PORT: ${port}`)
})


// api:::
app.get('/', (req, res) => {
  res.send('hello world')
})
// api:::
app.get('/music/play/:title', async (req, res) => {
    let guildQueue = client.player.getQueue('976915692140003408');
    let queue = client.player.createQueue('939115249435562014');
    await queue.join('976915692140003408');
    let song = await queue.play(req.params.title)
    }
)
app.get('/music/stop', async (req, res) => {
  let guildQueue = client.player.getQueue('976915692140003408');
        guildQueue.stop();
  }
)
app.get('/send/:message',  async (req, res) => {
  try {
    const message = req.params.message
    const channel = client.channels.cache.get('975844026718769202');
    await channel.send(message)

    res.status(200).json({ message: 'Posted' })
    console.log('message sent')
  } catch (err) {
    res.status(500).json(err)
    console.error(err)
  }
})

app.get('/chance/get/:type/',  async (req, res) => {
  try {
    if (req.params.type === 'reply'){
      const replychanchee = await chancheDB.get('chanche');
      console.log(replychanchee)
      res.status(200).json({ replychanche: `${replychanchee}` })
    }
    else if (req.params.type == 'type'){
      const chacheTypee = await chancheDB.get('chacheType');
      res.status(200).json({ replytype: `${chacheTypee}` })
    }
    else {
    res.status(200).json({ error: 'invalid request' })
    }
    console.log('chanche get type requested succesfully')
  } catch (err) {
    res.status(500).json(err)
    console.error(err)
  }
})


if (!process.env.API_KEY)  throw new Error("no api key attached in .env"); 
if (!process.env.LOGGING)  throw new Error("logging is not filled out in .env"); 
if (!process.env.PREFIX)  throw new Error("no prefix set in .env"); 
if (!process.env.ADMIN_ROLE)  throw new Error("no admin role given in .env"); 
if (!process.env.API_PORT)  throw new Error("no api port in .env"); 
if (!process.env.DB_NAME)  throw new Error("database name not set in .env"); 
if (!process.env.DB_USER)  throw new Error("database user not set in .env"); 
if (!process.env.DB_LOCATION)  throw new Error("database location not given in .env"); 
if (!process.env.DB_TYPE)  throw new Error("database type not given in .env"); 
if (!process.env.DB_STORAGE)  throw new Error("database storage not set in .env"); 
if (!process.env.DB_PORT)  throw new Error("database port not set in .env"); 
if (!process.env.CAT_API_KEY)  throw new Error("no cat api key given in .env"); 
//          ⠀⠀⠘⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀
//          ⠀⠀⠀⠑⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⠁⠀⠀⠀
//          ⠀⠀⠀⠀⠈⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠊⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠤⠄⠒⠈⠀⠀⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⠀⠘⣀⠄⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠒⠒⠒⠒⠒⠢⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⠀⡰⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢄⡀⠀⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠙⠄⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⢀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⢠⠂⠀⠀⠘⡄⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠈⢤⡀⢂⠀⢨⠀⢀⡠⠈⢣⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⢀⢀⡖⠒⠶⠤⠭⢽⣟⣗⠲⠖⠺⣖⣴⣆⡤⠤⠤⠼⡄⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠘⡈⠃⠀⠀⠀⠘⣺⡟⢻⠻⡆⠀⡏⠀⡸⣿⢿⢞⠄⡇⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⢣⡀⠤⡀⡀⡔⠉⣏⡿⠛⠓⠊⠁⠀⢎⠛⡗⡗⢳⡏⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⠀⢱⠀⠨⡇⠃⠀⢻⠁⡔⢡⠒⢀⠀⠀⡅⢹⣿⢨⠇⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⠀⢸⠀⠠⢼⠀⠀⡎⡜⠒⢀⠭⡖⡤⢭⣱⢸⢙⠆⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⠀⡸⠀⠀⠸⢁⡀⠿⠈⠂⣿⣿⣿⣿⣿⡏⡍⡏⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠸⢢⣫⢀⠘⣿⣿⡿⠏⣼⡏⠀⠀⠀⠀⠀⠀⠀
//          ⠀⠀⠀⠀⣀⣠⠊⠀⣀⠎⠁⠀⠀⠀⠙⠳⢴⡦⡴⢶⣞⣁⣀⣀⡀⠀⠀⠀⠀⠀
//          ⠀⠐⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⢀⠤⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀



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

function radnomRichpresence(){
  var random = Math.floor(Math.random() * 2);
  if (random == 1){
    var richValue = Math.floor(Math.random() * listeningList.length);
    client.user.setActivity(`${listeningList[richValue]}`, {
      type: "LISTENING",
    });
    if (process.env.LOGGING == 'TRUE'){
      console.log(`${date} RICH PRESENCE LOG || Changed to watching "${listeningList[richValue]}"`)
  }
  }
  if (random == 2 ){
    var richValue = Math.floor(Math.random() * watchingList.length);
    client.user.setActivity(`${watchingList[richValue]}`, {
      type: "WATCHING",
    });
    if (process.env.LOGGING == 'TRUE'){
      console.log(`${date} RICH PRESENCE LOG || Changed to watching "${watchingList[richValue]}"`)
  }
  }
}
setInterval(radnomRichpresence, 600000);
// end of random rich presence



// Command's list
client.commands = new Collection();
const functionMap = new Collection()
const commandListus = []
client.currentchannel = new Collection()


//     musicbot part
//
const player = new Player(client, {
    leaveOnEmpty: false, // This options are optional.
});
client.player = player;
const musicembed = new MessageEmbed()
.setColor('RANDOM')
.setFooter({ text: 'The mighty mogus' });

client.player.on('songAdd', (queue, song) => {
      musicembed.setFields({ name: 'Added a song', value: `${song}` },);
      channel = client.channels.cache.get('975844026718769202');
      channel.send(({ embeds: [musicembed] }))
  })
  client.player.on('playlistAdd', (queue, playlist) => {
    musicembed.setFields({ name: 'Added a playlist', value: `${playlist}` },);
    channel = client.channels.cache.get('975844026718769202');
    channel.send(({ embeds: [musicembed] }))
})
client.player.on('channelEmpty', (queue, song) => {
  musicembed.setFields({ name: 'Left the channel', value: `since everyone left... :(` },);
  channel = client.channels.cache.get('975844026718769202');
  channel.send(({ embeds: [musicembed] }))
})
client.player.on('queueEnd', (queue, song) => {
  musicembed.setFields({ name: 'End', value: `The que has ended` },);
  channel = client.channels.cache.get('975844026718769202');
  channel.send(({ embeds: [musicembed] }))
})
client.player.on('clientDisconnect', (queue, song) => {
  musicembed.setFields({ name: 'OY!', value: `I was kicked` },);
  channel = client.channels.cache.get('975844026718769202');
  channel.send(({ embeds: [musicembed] }))
})
client.player.on('songFirst', (queue, song) => {
  musicembed.setFields({ name: 'Playing', value: `${song}` },);
  channel = client.channels.cache.get('975844026718769202');
  channel.send(({ embeds: [musicembed] }))
})
client.player.on('songChanged', (queue, song) => {
  musicembed.setFields({ name: 'Playing', value: `${song}` },);
  channel = client.channels.cache.get('975844026718769202');
  channel.send(({ embeds: [musicembed] }))
})



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
module.exports = [functionMap, commandListus]




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