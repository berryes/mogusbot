const lang = require("../lang.json")
const {MessageEmbed} = require("discord.js")
const errorEmbed = new MessageEmbed()
.setFooter({ text: `${lang.botname}`, iconURL: `${lang.botimg}` });
errorEmbed.setTitle(`${lang.error}`)
errorEmbed.setColor('RED')

errorMessage = (error,message) => {
    switch (error){
       case 'noRole':
        errorEmbed.setDescription(`${lang.missingRole}`)
           break;
        case 'noArgs':
            errorEmbed.setDescription(`${lang.noArgumentsGiven}`)
            break;
        case 'argIsnan':
            errorEmbed.setDescription(`${lang.argIsnan}`)
            break;
        case 'badArg':
            errorEmbed.setDescription(`${lang.badArgs}`)
            break;
        case 'noImg':
            errorEmbed.setDescription(`${lang.noImageAttached}`)
            break;
        case 'notOwner':
            errorEmbed.setDescription(`${lang.notOwner}`)
            break;

        default:
            errorEmbed.setDescription(`${lang.defaultErorr}`)


}
message.reply(({ embeds: [errorEmbed] }))
}
module.exports = errorMessage