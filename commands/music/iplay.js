const {MessageEmbed} = require("discord.js")
const lang = require("../../lang.json");
const errorMessage = require("../../functions/errorMessage")
module.exports = {
    name: "iplay",
    arguments: 'url',
    usage: [`${process.env.PREFIX} (url/song name)`],
    description: "Instanly plays the given music and everything that was playing remains in the queue!",
    type: "Music",
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
                let queue = await client.player.getQueue(message.guild.id);
                const oldsongs = queue.songs[0]
                queue.skip()
                await queue.join(message.member.voice.channel);
                await queue.playlist(args.join(" "),{
                    requestedBy: message.author,
                    index: 1,
                })
                queue.songs.push(oldsongs)
            }
            else {
            let queue = await client.player.getQueue(message.guild.id);
            const oldsongs = queue.songs
           
            await queue.play(args.join(" "),{
                requestedBy: message.author,
                index: 0,
            })
            queue.skip()
            for(let x in oldsongs){
                queue.songs.push(oldsongs[x])
            }
           
        }


    

}}
