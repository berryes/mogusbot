const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const membed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })

logger = (type,Client,oldMessage,newMessage) => {

if(!Client.logchannel.get(oldMessage.guild.id)){ return }
if (oldMessage.author.bot) return;
const user = Client.users.cache.get(`${oldMessage.author.id}`)
membed.setThumbnail(`${user.displayAvatarURL()}`)
membed.setAuthor(`${user.username}#${user.discriminator}`)
membed.setTimestamp()

 switch (type){
    case 'messageChange':
        membed.setTitle("Message edit")
        membed.setColor('BLURPLE')
        membed.addFields(
            { name: 'From', value: `${oldMessage.content}`,  },
            { name: 'To', value: `${newMessage.content}` },
            { name: 'in', value: `<#${newMessage.channelId}>` },
        )
        break;
    case 'messageSent':
        membed.setTitle("Message sent")
        membed.setColor('BLURPLE')
        membed.addFields(
            { name: 'Message content:', value: `${oldMessage.content}`,  },
            { name: 'In', value: `<#${oldMessage.channelId}>` },
        )
        break;
        
    case 'imageSent':
        membed.setTitle("Image sent")
        membed.setColor('BLURPLE')
        membed.addFields(
            { name: 'In', value: `<#${oldMessage.channelId}>` },
        )
        break;
 }
 
Client.channels.cache.get(`${Client.logchannel.get(oldMessage.guild.id)}`).send(({ embeds: [membed] }))
membed.fields = [];
}
    
module.exports = logger;