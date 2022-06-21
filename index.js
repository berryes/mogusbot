const check = require("./functions/startupCheck")
check()

const { Client, Intents, Collection,MessageEmbed,  } = require("discord.js");
const fs = require("fs");
const Discord = require('discord.js');
const lang = require("./lang.json")
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_VOICE_STATES ]
});
require("dotenv").config();
client.adminroles = new Collection()
client.replyChance = new Collection()
client.replyType = new Collection()
//     musicbot part
const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false, 
});

client.player = player;
client.currentchannel = new Collection()
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })
.setTimestamp();

const errorEmbed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` });

client.player.on('songAdd', async (queue, song, ) => {
  let guildID = queue.guild.id
  musicembed.setTitle(`${song}`)
	musicembed.setURL(`${song.url}`)
  musicembed.setColor('BLURPLE')
  musicembed.setThumbnail(`${song.thumbnail}`)
  musicembed.setDescription(`${lang.songAdded} | ${lang.playingIN} <#${queue.connection.channel.id}>`)
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
client.player.on('error',async  (queue, song) => {
  errorEmbed.setFields({ name: `${lang.error}`, value: `${lang.failedToLoad}` },);
  errorEmbed.setColor('RED')
  console.log("error playing")
/*   client.channels.cache.get(`${queue.guild.systemChannelId}`).send(({ embeds: [musicembed] }))
 */})


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