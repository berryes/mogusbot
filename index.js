const check = require("./functions/startupCheck")
const statistics = require("./functions/statistics")
check()
const randominfo = require("./functions/randomInfo")



const { Client, Intents, Collection,MessageEmbed,ShardingManager   } = require("discord.js");
const fs = require("fs");
const Discord = require('discord.js')
/* const manager = new ShardingManager('./index.js', { token: `${process.env.API_KEY}` });
manager.spawn(); */

const lang = require("./lang.json")
const client =  new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_VOICE_STATES ]
});
require("dotenv").config();
client.adminroles = new Collection()
client.replyChance = new Collection()
client.replyType = new Collection()
client.playerData = new Collection()
client.logchannel = new Collection()
client.prefixes = new Collection()


//     musicbot part
const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEnd: false,
    leaveOnStop: false,
    leaveOnEmpty: false,
    timeout: 5,
    quality: "high",
});

client.player = player;
const musicembed = new MessageEmbed()
.setColor('BLURPLE')
const errorEmbed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` });

client.player.on('songAdd', async (queue, song, ) => {
  musicembed.setTitle(`${song}`)
  musicembed.setURL(`${song.url}`)
  musicembed.setThumbnail(`${song.thumbnail}`)
  musicembed.setTimestamp()
  client.channels.cache.get(`${queue.data.messageCh}`).send(({ embeds: [musicembed] }))
  musicembed.fields = []
  if(process.env.LOGGING == 'True'){ console.log(`MUSIC | Added song: (${song}) to the queue in ${queue.guild.name}(${queue.guild.id})`)}
  })

  client.player.on('playlistAdd', async (queue, playlist) => {
    console.log(playlist)
    musicembed.setThumbnail(null)
    musicembed.setTitle(`${playlist}`)
    musicembed.setURL(`${playlist.url}`)
    musicembed.setTimestamp()
    client.channels.cache.get(`${queue.data.messageCh}`).send(({ embeds: [musicembed] }))
    musicembed.fields = []
    if(process.env.LOGGING == 'True'){ console.log(`MUSIC | Added playlist: to the queue in ${queue.guild.name}(${queue.guild.id})`)}
})
client.player.on('channelEmpty', async (queue, song) => {
  errorEmbed.setFields({ name: `${lang.voiceChannelEmpty}`, value: `${lang.voiceChannelEmptyDesc}` },);
  musicembed.setTimestamp()
  client.channels.cache.get(`${queue.data.messageCh}`).send(({ embeds: [musicembed] }))
  musicembed.fields = []
})
client.player.on('songFirst', async (queue, song) => {
  musicembed.setAuthor({ name: `${client.users.cache.get(queue.data.requestedBy).username} ${lang.requested}`, iconURL: `${(client.users.cache.get(queue.data.requestedBy)).displayAvatarURL()}` })
  musicembed.setTitle(`${song}`)
	musicembed.setURL(`${song.url}`)
  musicembed.setThumbnail(`${song.thumbnail}`)
  musicembed.setDescription(` **${song.duration}** | ${lang.playingIN} <#${queue.connection.channel.id}>`)
  musicembed.setTimestamp()
  queue.data.delete.delete()
  client.channels.cache.get(`${queue.data.messageCh}`).send(({ embeds: [musicembed] }))
  musicembed.fields = []
  if(process.env.LOGGING == 'True'){ console.log(`MUSIC | Started playing (${song}) in ${queue.guild.name}(${queue.guild.id})`)}
})


client.player.on('songChanged', async (queue, newSong,oldSong) => {
  musicembed.setAuthor({ name: `${(client.users.cache.get(queue.data.requestedBy)).username} ${lang.requested}`, iconURL: `${(client.users.cache.get(queue.data.requestedBy)).displayAvatarURL()}` })
  musicembed.setTitle(`${newSong}`)
	musicembed.setURL(`${newSong.url}`)
  musicembed.setThumbnail(`${newSong.thumbnail}`)
  musicembed.setDescription(`** ${newSong.duration}** |${lang.playingIN} <#${queue.connection.channel.id}>`)
  musicembed.setTimestamp()
  client.channels.cache.get(`${queue.data.messageCh}`).send(({ embeds: [musicembed] }))
  musicembed.fields = []

})


client.player.on('error',async  (queue, song) => {
  errorEmbed.setFields({ name: `${lang.error}`, value: `${lang.failedToLoad}` },);
  errorEmbed.setColor('RED')
  console.log("error playing")
  queue.skip()
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


// Send statistics to server
if(process.env.SEND_STATS == 'True'){ statistics(Client) }

const express = require('express')
const app = express()
const port = process.env.API_PORT
const cors = require('cors')

const getGuilds = require("./api/getGuilds")
const getChannels = require("./api/getChannels")

app.use(cors())

app.get('/', (req, res) => {
  res.send('The mogusbot is running!')
})
app.get('/getGuilds/', (req, res) => {
  const guilds = getGuilds(client)
  res.send(guilds)

})
app.get('/getGuild/:id', (req, res) => {
  const guilds = getGuilds(client,req.params.id)
  if(!guilds){ return res.send("Nothing was found on that id") }
  res.send(guilds)
})
app.get('/getChannels/:id', (req, res) => {
  const guilds = getChannels(client,req.params.id)
  if(!guilds){ return res.send("Nothing was found on that id") }
  res.send(guilds)
})
app.listen(port)



