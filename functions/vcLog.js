const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const membed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` })


vclogger = (type,oldState,newState,Client) => {

// if the guild doesnt have a log channel set do not run


    const user = Client.users.cache.get(`${newState.id}`)
    membed.setThumbnail(`${user.displayAvatarURL()}`)
    membed.setAuthor(`${user.username}#${user.discriminator}`)
    membed.setTimestamp()
    switch (type){
       case 'deafened':
        membed.setTitle("Dafened")
        membed.setColor('DARK_RED')
        membed.setFields(
            { name: '\u200B', value: `<#${oldState.channelId}>`}
            )
            if(process.env.LOGGING == 'True'){ console.log(`${new Date} VOICE LOG | ${user.username}#${user.discriminator} Deafened | ${newState.channelId} ${newState.guild.name}(${newState.guild.id})`)}
           break;

        case 'undeafened':
            membed.setTitle("Undefened")
            membed.setColor('GREEN')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}
                )
                if(process.env.LOGGING == 'True'){ console.log(`${new Date} VOICE LOG | ${user.username}#${user.discriminator} Undeafened | ${newState.channelId} ${newState.guild.name}(${newState.guild.id})`)}
        break;

        case 'muted':
            membed.setTitle("Muted")
            membed.setColor('DARK_RED')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}
                )
                if(process.env.LOGGING == 'True'){ console.log(`${new Date} VOICE LOG | ${user.username}#${user.discriminator} Muted | ${newState.channelId} ${newState.guild.name}(${newState.guild.id})`)}

            break;

        case 'unmuted':
            membed.setTitle("unmuted")
            membed.setColor('GREEN')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}
                )
                if(process.env.LOGGING == 'True'){ console.log(`${new Date} VOICE LOG | ${user.username}#${user.discriminator} Unmuted |${newState.channelId} ${newState.guild.name}(${newState.guild.id})`)}

            break;

        case 'left':
            membed.setTitle("Left")
            membed.setColor('RED')
            membed.setFields(
                { name: '\u200B', value: `<#${oldState.channelId}>`}  
                )
                if(process.env.LOGGING == 'True'){ console.log(`${new Date} VOICE LOG | ${user.username}#${user.discriminator} left | ${oldState.channelId} ${newState.guild.name}(${newState.guild.id})`)}
            break;

        case 'joined':
            membed.setTitle("Joined")
            membed.setColor('GREEN')
            membed.setFields(
                { name: '\u200B', value: `<#${newState.channelId}>`} 
                )
                if(process.env.LOGGING == 'True'){ console.log(`${new Date} VOICE LOG | ${user.username}#${user.discriminator} Joined |${newState.channelId} ${newState.guild.name}(${newState.guild.id})`)}
            break;

        case 'moved':
            membed.setTitle("Moved")
            membed.setColor('PURPLE')
            membed.addFields(
                { name: 'From', value: `<#${oldState.channelId}> ➡`, inline: true },
                { name: 'To', value: `<#${newState.channelId}>`, inline: true },
            )
            if(process.env.LOGGING == 'True'){ console.log(`${new Date} VOICE LOG | ${user.username}#${user.discriminator} Moved |${oldState.channelId} -> ${newState.channelId} ${newState.guild.name}(${newState.guild.id})`)}
            break;
    
}

if(!Client.logchannel.get(oldState.guild.id)){ membed.fields = []; return }
Client.channels.cache.get(`${Client.logchannel.get(oldState.guild.id)}`).send(({ embeds: [membed] }))
membed.fields = [];
}
module.exports = vclogger