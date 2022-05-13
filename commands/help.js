const commands = require('../index')
const { MessageEmbed } = require('discord.js');
const commandListus = require("../index")
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
            textEmbed.setFields({ name: `Error`, value: `${args[0]} is not a command. Ask for them with ${process.env.PREFIX} commands`,});
            textEmbed.setColor('RED')
            message.reply({embeds: [textEmbed]})
        }
        else {
            textEmbed.setFields(
             { value: `Name`, name: `**${command.name}**` },
             { value: `Description`, name: `${command.description}` },
             { value: `Usage`, name: `${command.usage}` },
             );
            message.channel.send({ embeds: [textEmbed] })
        }
  
}
}

exports.name = "help";

