const ytdl = require("ytdl-core")
const YouTube = require("youtube-sr").default;
const fs = require("fs")
const { joinVoiceChannel,createAudioPlayer,createAudioResource } = require('@discordjs/voice');
const player = createAudioPlayer();



module.exports = {
    name: "play",
    arguments: 'url',
    usage: [`${process.env.PREFIX} (url)`],
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
        args.join(" ")
        const url = `${args[0]}`
        // finds the song on youtube.
            await YouTube.searchOne(`${url}`)
            .then(x => id.push(x.id))
            .catch(console.error);
            const songData = await ytdl.getInfo(`https://youtube.com/watch?v=${id[0]}`)
            
            // downloads it to /temp via its url
            ytdl(`https://youtube.com/watch?v=${id[0]}`)
            .pipe(fs.createWriteStream(`./temp/${id[0]}.mp4`));
            // adds it to the queue
            if (!client.queue.get("tracks")){
                client.queue.set("tracks",`${id[0]}`)
                console.log("before:", client.queue.get("tracks"))
            }else{
                const lastback = client.queue.get("tracks")
                client.queue.set("tracks",`${id[0]},${lastback}`)
                console.log("after:", client.queue.get("tracks"))
            }

            // joins channel
            let channel = message.member.voice.channel;
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfDeaf: false
             });
            
            // gets the tracks, puts them into a list and plays the first one
            const tracks = client.queue.get("tracks");
            const songs = tracks.split(',')
            const resource = createAudioResource(`./temp/${songs[0]}.mp4`);

            connection.subscribe(player)
            player.play(resource)
            player
            .on('queueEnd',  (client.queue) =>
            console.log(`The queue has ended.`))

            embed.setTitle(`${songData.videoDetails.title}`)
            message.channel.send({ embeds: [embed] });

}}