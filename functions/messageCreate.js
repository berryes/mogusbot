const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const membed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })
.setColor('BLURPLE');

errorMessage = (type,message,list) => {
    switch (type){
       case 'currentChance':
        membed.setTitle(`${lang.currentChance}`)
        membed.addFields(
            { name: `${lang.currentReplyChance}`, value: `${list[0]}` },
            { name: `${lang.currentTypeChance}`, value: `${list[1]}` },
        )
           break;
        case 'imageUploaded':
            membed.setColor('GREEN')
            membed.setTitle(`${lang.succesfullImageAdd}`)
        default:
            membed.setDescription(`${lang.defaultErorr}`)

}
message.reply(({ embeds: [membed] }))
}
module.exports = errorMessage