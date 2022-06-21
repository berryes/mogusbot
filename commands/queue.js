const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json")
const embedd = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` });
module.exports = {
    name: "queue",
    arguments: 'none',
    usage: [`${process.env.PREFIX} queue`],
    description: "Shows the queue",
    run: (client, message, args) => {
        const asd = []
        const five = 5
    for (let x in five){
        asd.push(`{ name: 'field${x} ', value: 'Some value here', inline: true },`)
    }
    console.log(asd)
    embedd.addFields(asd)
    message.reply(({ embeds: [embedd] }))
}
}
exports.name = "queue";

