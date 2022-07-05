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
        case 'badURL':
            errorEmbed.setDescription(`${lang.badURL}`)
            break;
        case 'usernotinvc':
            errorEmbed.setDescription(`${lang.userNotInVoiceChannel}`)
            break;

        case 'skippingIsNotNumber':
            errorEmbed.setDescription(`${lang.skippingIsNotNumber}`)
            break;

        case 'notPlaying':
            errorEmbed.setDescription(`${lang.notPlaying}`)
            break;

        case 'usernotinPlayingVc':
            errorEmbed.setDescription(`${lang.usernotinPlayingVc}`)
            break;
        case 'quoteExists':
            errorEmbed.setDescription(`${lang.quoteExists}`)
            break;
        default:
            errorEmbed.setDescription(`${lang.defaultErorr}`)
            break;


}
message.reply(({ embeds: [errorEmbed] }))
errorEmbed.fields = [];
}
module.exports = errorMessage