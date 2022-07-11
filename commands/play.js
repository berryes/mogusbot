const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const errorMessage = require("../functions/errorMessage")
module.exports = {
    name: "play",
    arguments: 'url',
    usage: [`${process.env.PREFIX} (url/song name)`],
    description: "Plays a song/playlist",
    run: async (client, message, args)  => {
        const Supported = ["spotify.com/playlist","youtube.com/playlist"]
        let isPlaylist = null
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}

        for (let x in Supported){
            console.log(args[0].includes(Supported[x]))
            if(args[0].includes(Supported[x])) {
                isPlaylist = true 
                break; 
            } else {isPlaylist = false}  }
            if(isPlaylist == true){
                let queue = await client.player.createQueue(message.guild.id, {
                    data: {
                        messageCh: `${message.channelId}`,
                        requestedBy: message.author.id,
                        playlistlength: 0,
                    }
                });
                await queue.join(message.member.voice.channel);
                let song = await queue.playlist(args.join(' '))
            }
            else {
            let guildQueue = client.player.getQueue(message.guild.id);
            let queue = await client.player.createQueue(message.guild.id, {
                data: {
                    messageCh: `${message.channelId}`,
                    requestedBy: message.author.id,
                }
            });
            await queue.join(message.member.voice.channel);
            let song = await queue.play(args.join(" "))
        }
}}
