const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const membed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })


vclogger = (type,oldState,newState,Client) => {

// if the guild doesnt have a log channel set do not run
if(!Client.logchannel.get(oldState.guild.id)){ return }

    const user = Client.users.cache.get(`${newState.id}`)
    membed.setThumbnail(`${user.displayAvatarURL()}`)
    membed.setAuthor(user.username)
    console.log(user)

    switch (type){
       case 'deafened':
        membed.setTitle("Dafened")
        membed.setColor('DARK_RED')
        membed.setFields(
            { name: '\u200B', value: `<#${oldState.channelId}>`}
            )
           break;

        case 'undeafened':
            membed.setTitle("Undefened")
            membed.setColor('GREEN')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}
                )
        break;

        case 'muted':
            membed.setTitle("Muted")
            membed.setColor('DARK_RED')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}
                )
            break;

        case 'unmuted':
            membed.setTitle("unmuted")
            membed.setColor('GREEN')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}
                )
            break;

        case 'left':
            membed.setTitle("Left")
            membed.setColor('RED')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}  
                )
            break;

        case 'joined':
            membed.setTitle("Joined")
            membed.setColor('GREEN')
            membed.setFields(
                { name: '\u200B', value: `<#${newState.channelId}>`} 
                )
            break;

        case 'moved':
            membed.setTitle("Moved")
            membed.setColor('PURPLE')
            membed.addFields(
                { name: 'From', value: `<#${oldState.channelId}> ➡`, inline: true },
                { name: 'To', value: `<#${newState.channelId}>`, inline: true },
            )
            break;
    
}
Client.channels.cache.get(`${Client.logchannel.get(oldState.guild.id)}`).send(({ embeds: [membed] }))
membed.fields = [];
}
module.exports = vclogger