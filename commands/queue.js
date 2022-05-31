module.exports = {
    name: "queue",
    arguments: 'none',
    usage: [`${process.env.PREFIX} queue`],
    description: "Shows the queue",
    run: (client, message, args) => {
        let guildQueue = client.player.getQueue(message.guild.id);
    message.channel.send(`${guildQueue}`);
}
}
exports.name = "queue";

