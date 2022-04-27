const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setURL('https://berryez.xyz/')
	.setAuthor({ name: 'The mogus bot', iconURL: 'https://i.imgur.com/nH7tKhI.png', url: 'https://berryez.xyz/' })
	.setDescription('the mighty mogus bot has appeared. ')
	.setThumbnail('https://i.imgur.com/lfchERD.gif')
	.addFields(
		{ name: 'Commands', value: 'use the .sus prefix' },
		{ name: 'chad', value: 'Random chad pic', inline: true },
		{ name: 'sussypic', value: 'A really sussy pic', inline: true },
		{ name: 'randomsus', value: 'random sussy word.', inline: true },
		{ name: 'commands', value: 'this embed', inline: true },
		{ name: 'choose', value: 'choose between two number/words. put space between em', inline: true },
		{ name: 'chance', value: 'change replychance value', inline: true },
		{ name: 'uptime', value: 'how long have the bot been running for', inline: true },
	)
	.setTimestamp()
	.setFooter({ text: 'Mogusbot version 0.0.0.6'});
    message.channel.send({ embeds: [exampleEmbed] });
}

exports.name = "commands";

