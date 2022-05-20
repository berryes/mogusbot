module.exports = {
    name: "stop",
    arguments: 'none',
    usage: [`${process.env.PREFIX} stop`],
    description: "Stops the music",
    run: (client, message, args) => {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.stop();
}
}
exports.name = "stop";

