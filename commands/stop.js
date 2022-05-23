
module.exports = {
    name: "stop",
    arguments: 'none',
    usage: [`${process.env.PREFIX} stop`],
    description: "Stops the music",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: 'Error!', value: 'You are not in a voice channel!' },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.stop();
    }
}
}
exports.name = "stop";

