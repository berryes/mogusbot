const { Client, Intents, Collection,MessageEmbed,  } = require("discord.js");
const fs = require("fs");
const Discord = require('discord.js');
const lang = require("./lang.json")
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_VOICE_STATES ]
});
require("dotenv").config();

function getDate(){
  currentDate = new Date()
  const date = "" + currentDate.getFullYear()+ "." + currentDate.getMonth() + "." + currentDate.getDate() + " "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()    
  return date
}

/* 
const express = require('express')
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
client.currentchannel.set("channel","975844026718769202")
app.get('/music/play/:title', async (req, res) => {
    let guildQueue = client.player.getQueue('976915692140003408');
    let queue = client.player.createQueue('939115249435562014');
    await queue.join('976915692140003408');
    let song = await queue.play(req.params.title)

    }
)
app.get('/music/skip', async (req, res) => {
  let guildQueue = client.player.getQueue('939115249435562014');
  guildQueue.skip();
  }
)
app.get('/music/playing', async (req, res) => {
  
  res.send(`${guildQueue.nowPlaying}`)
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
}) */


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


/* const radnomRichpresence = require("./functions/randomRichPresence")
setInterval(radnomRichpresence, 10000); */


// Command's list



//     musicbot part
const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false, 
});

client.player = player;
client.currentchannel = new Collection()
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

const errorEmbed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });

client.player.on('songAdd', async (queue, song, ) => {
  let guildID = queue.guild.id
  musicembed.setTitle(`${song}`)
	musicembed.setURL(`${song.url}`)
  musicembed.setColor('BLURPLE')
  musicembed.setThumbnail(`${song.thumbnail}`)
  musicembed.setDescription(`${lang.songAdded} | ${lang.playingIN} <#${queue.connection.channel.id}>`)
  console.log(queue)
  console.log(queue.connection.channel.id)

      client.channels.cache.get(`${ await client.currentchannel.get(`${queue.guild.id}`)}`).send(({ embeds: [musicembed] }))
  })
  client.player.on('playlistAdd', async (queue, playlist) => {
    musicembed.setTitle(`${playlist}`)
    musicembed.setURL(`${playlist.url}`)
    musicembed.setColor('BLURPLE')
    musicembed.setDescription(`${lang.playlistAdded} | ${lang.playingIN} <#${queue.connection.channel.id}>`)
    client.channels.cache.get(`${ await client.currentchannel.get(`${queue.guild.id}`)}`).send(({ embeds: [musicembed] }))
})
client.player.on('channelEmpty', async (queue, song) => {
  musicembed.setFields({ name: `${lang.voiceChannelEmpty}`, value: `${lang.voiceChannelEmptyDesc}` },);
  musicembed.setColor('RED')
  client.channels.cache.get(`${ await client.currentchannel.get(`${queue.guild.id}`)}`).send(({ embeds: [musicembed] }))
})
client.player.on('queueEnd', async (queue, song) => {
  errorEmbed.setFields({ name: `${lang.queueEnd}`, value: `${lang.queueEndDesc}` },);
  errorEmbed.setColor('BLURPLE')
  client.channels.cache.get(`${ await client.currentchannel.get(`${queue.guild.id}`)}`).send(({ embeds: [musicembed] }))
})

client.player.on('songFirst', async (queue, song) => {
  musicembed.setTitle(`${song}`)
	musicembed.setURL(`${song.url}`)
  musicembed.setColor('BLURPLE')
  musicembed.setThumbnail(`${song.thumbnail}`)
  musicembed.setDescription(`${lang.playingIN} <#${queue.connection.channel.id}>`)
  client.channels.cache.get(`${ await client.currentchannel.get(`${queue.guild.id}`)}`).send(({ embeds: [musicembed] }))
})
client.player.on('songChanged', async (queue, song) => {
  musicembed.setTitle(`${song}`)
	musicembed.setURL(`${song.url}`)
  musicembed.setColor('BLURPLE')
  musicembed.setThumbnail(`${song.thumbnail}`)
  musicembed.setDescription(`${lang.playingIN} <#${queue.connection.channel.id}>`)
  client.channels.cache.get(`${ await client.currentchannel.get(`${queue.guild.id}`)}`).send(({ embeds: [musicembed] }))
})
client.player.on('Error',async  (queue, song) => {
  errorEmbed.setFields({ name: `${lang.error}`, value: `${lang.failedToLoad}` },);
  errorEmbed.setColor('RED')
  client.channels.cache.get(`${ await client.currentchannel.get(`${queue.guild.id}`)}`).send(({ embeds: [musicembed] }))
})




client.commands = new Collection();
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
  client.commands.set(commandName, command);
}

client.login(process.env.API_KEY);


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