module.exports = {
    name: "Commands",
    arguments: 'none',
    type: "System",
    usage: [`${process.env.PREFIX} commands`],
    description: "Displays commands",
    run: (client, message, args) => {
        message.reply("https://github.com/berryes/mogusbot/blob/main/commands.md")
}
}


