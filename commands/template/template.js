module.exports = {
    name: "Template",
    arguments: 'none',
    usage: [`${process.env.PREFIX} Template`],
    description: "Template",
    type: "Fun",
    run: (client, message, args) => {
       message.reply("Hello im a template command")
}
}


