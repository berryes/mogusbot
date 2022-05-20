
module.exports = {
    name: "play",
    arguments: 'url',
    usage: [`${process.env.PREFIX} (url)`],
    description: "Plays a song/playlist",
    run: async (client, message, args)  => {

        if(args[0].includes("spotify.com/playlist/")){
            let queue = client.player.createQueue(message.guild.id);
            await queue.join(message.member.voice.channel);
            let song = await queue.playlist(args.join(' ')).catch(_ => {
                if(!guildQueue)
                    queue.stop();
            });
        }
        // retardedus codeus rightus hereus |
        //                                  #   
        else if(!args[0].includes("spotify.com/playlist/")){
        let guildQueue = client.player.getQueue(message.guild.id);
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(" "))
        }
}}
