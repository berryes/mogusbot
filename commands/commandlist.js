module.exports = {
    name: "Commandlist",
    arguments: 'none',
    usage: [`${process.env.PREFIX} commandlist`],
    description: "Displays commands",
    run: (client, message, args) => {
        message.reply("https://github.com/berryes/mogusbot/commands.md")
}
}


