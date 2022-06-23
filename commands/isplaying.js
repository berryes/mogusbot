module.exports = {
    name: "asd",
    arguments: 'none',
    usage: [`${process.env.PREFIX} asd`],
    description: "asd",
    run: (client, message, args) => {
        let guildQueue = client.player.getQueue(message.guild.id);

        if (!(message.member.voice.channel.id == guildQueue.connection.channel.id)){
            message.reply("not in same channel")
        }
        else {
            message.reply("in same")
            console.log(message.member.voice.channel.id)
            console.log(guildQueue.connection.channel.id)
        }
    }
}


