const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const membed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })

logger = (type,Client,oldMessage,newMessage) => {
if(!Client.logchannel.get(newMessage.guild.id)){ return }
const user = Client.users.cache.get(`${newMessage.author.id}`)
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
            { name: 'in', value: `<@${newMessage.channelId}>` },
        )
        break;
 }
 
Client.channels.cache.get(`${Client.logchannel.get(newMessage.guild.id)}`).send(({ embeds: [membed] }))
membed.fields = [];
}
    
module.exports = logger;