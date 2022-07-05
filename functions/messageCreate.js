const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const membed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })
.setColor('BLURPLE');

errorMessage = (type,message,list) => {
    switch (type){
       case 'currentChance':
        membed.setTitle(`${lang.currentChance}`)
        membed.setFields(
            { name: `${lang.currentReplyChance}`, value: `${list[0]}` },
            { name: `${lang.currentTypeChance}`, value: `${list[1]}` },
        )
           break;

        case 'imageUploaded':
            membed.setColor('GREEN')
            membed.setTitle(`${lang.succesfullImageAdd}`)
            break;

        case 'queueStop':
        membed.setFields({ name: `${lang.stop}`, value: `${lang.queueStop}` },);
        membed.setColor('GREEN')
        break;

        case 'adminrole':
            membed.setFields({ name: `${lang.success}`, value: `${lang.adminrole}` },);
            membed.setColor('GREEN')
            break;
        case 'logset':
            membed.setFields({ name: `${lang.success}`, value: `${lang.logset}` },);
            membed.setColor('GREEN')
            break;

        case 'quoteAdd':
            membed.setTitle(`${lang.success}`)
            membed.setFields({ name: `${lang.quoteAdd}`, value: `${list[0].join(" ")}` },);
            membed.setColor('GREEN')
            break;

        case 'typeChange':
            membed.setTitle(`${lang.typeChange} ${list[0]}`)
            break;
        case 'replyChange':
            membed.setTitle(`${lang.replyChange} ${list[0]}`)
            break;
            
}
message.reply(({ embeds: [membed] }))
membed.fields = [];
}
module.exports = errorMessage