const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const errorMessage = require("../functions/errorMessage")
module.exports = {
    name: "play",
    arguments: 'url',
    usage: [`${process.env.PREFIX} (url/song name)`],
    description: "Plays a song/playlist",
    run: async (client, message, args)  => {
        if(!args[0]){return errorMessage("noArgs",message)}
        const Supported = ["spotify.com/playlist","youtube.com/playlist"]
        let isPlaylist = null
        let loadingMsg = null
        if (!message.member.voice.channel) { return errorMessage("usernotinvc",message)}
        
        for (let x in Supported){
            if(args[0].includes(Supported[x])) {
                isPlaylist = true 
                break; 
            } else {isPlaylist = false}  }

            if(isPlaylist == true){
                await message.reply(`${lang.loadingplaylist}`).then(msg => { loadingMsg = msg }).catch(console.error);
                let queue = await client.player.createQueue(message.guild.id, {
                    data: {
                        messageCh: `${message.channelId}`,
                        requestedBy: message.author.id,
                        playlistlength: 0,
                        delete: loadingMsg
                    }
                });
                await queue.join(message.member.voice.channel);
                await queue.playlist(args.join(" "))
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
            await queue.play(args.join(" "))
        }
}}
