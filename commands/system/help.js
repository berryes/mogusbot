const commands = require('../../index')
const { MessageEmbed } = require('discord.js');
const lang = require("../../lang.json");

module.exports = {
    name: "help",
    arguments: 'none',
    usage: [`${process.env.PREFIX} help`],
    description: "It does what u literally just did. dumbass",
    run: (client, message, args) => {
    const textEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Command help')
	.setTimestamp()

        const command = client.commands.get(args[0])
        if (!command){
            textEmbed.setFields({ name: `${lang.error}`, value: `${lang.helpCommandDoesNotExist}`,});
            textEmbed.setColor('RED')
            message.reply({embeds: [textEmbed]})
        }
        else {
            textEmbed.setFields(
             { value: `${lang.name}`, name: `**${command.name}**` },
             { value: `${lang.description}`, name: `${command.description}` },
             { value: `${lang.usage}`, name: `${command.usage}` },
             );
            message.channel.send({ embeds: [textEmbed] })
        }
  
}
}

exports.name = "help";

