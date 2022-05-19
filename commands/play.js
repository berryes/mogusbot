const ytdl = require("ytdl-core")
const YouTube = require("youtube-sr").default;
const fs = require("fs")
const { joinVoiceChannel,createAudioPlayer,createAudioResource } = require('@discordjs/voice');
const player = createAudioPlayer();
const playAudio = require('../modules/playAudio')
module.exports = {
    name: "sussypic",
    arguments: 'none',
    usage: [`${process.env.PREFIX} sussypic`],
    description: "Replies with a random sussy pic",
    run: async (client, message, args)  => {
        // at the top of your file
const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const embed = new MessageEmbed()
	.setColor('RANDOM')
	.setTimestamp()
	.setFooter({ text: 'The mighty mogus', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        const id = []
        const playlist = []
        args.join(" ")
        const url = `${args[0]}`
         if(url.includes("spotify")){
            message.reply("bad boy, idk how to do spotify links yet")
        }
        else if (url.includes("youtube")){
           
        }
        else {
            await YouTube.searchOne(`${url}`)
            .then(x => id.push(x.id))
            .catch(console.error);
            const songData = await ytdl.getInfo(`https://youtube.com/watch?v=${id[0]}`)
            song = {
                title: songData.videoDetails.title,
                duration: songData.videoDetails.lengthSeconds,
              };
            ytdl(`https://youtube.com/watch?v=${id[0]}`)
            .pipe(fs.createWriteStream(`./temp/${id[0]}.mp4`));

            const lastback = client.queue.get("tracks")
            if (!lastback){
                client.queue.set("tracks",`${id[0]}`)
            }else{
                const lastback = client.queue.get("tracks")
                client.queue.set("tracks",`${id[0]},${lastback}`)
            }

        playAudio()
            // sets embed to song name and sends it
            embed.setTitle(`${song.title}`)
            message.channel.send({ embeds: [embed] });

        }

    //searches for string



}}