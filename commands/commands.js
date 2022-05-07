const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setURL('https://github.com/berryes/mogusbot')
	.setAuthor({ name: 'The mogus bot', iconURL: 'https://i.imgur.com/nH7tKhI.png', url: 'https://berryez.xyz/' })
	.setDescription('the mighty mogus bot has appeared. ')
	.setThumbnail('https://i.imgur.com/lfchERD.gif')
	.addFields(
		{ name: 'Commands', value: 'use the .sus prefix' },
		{ name: 'chad', value: 'Random chad pic' },
		{ name: 'sussypic', value: 'A really sussy pic' },
		{ name: 'chance set type', value: '1% = always replies with image 100%= always with a quote' },
		{ name: 'chance set reply', value: 'change the reply chance! lower it is the more the bot replies!' },
		{ name: 'choose', value: 'choose between two number/words. put space between em' },
		{ name: 'add quote', value: 'add a quote to the database! | add negative / positive to the end of it' },
		{ name: 'add image', value: 'insert an image, the bot saves it and later it can reply with it!' },
		{ name: 'uptime', value: 'how long have the bot been running for' },
	)
	.setTimestamp()
	.setFooter({ text: 'Mogusbot version 0.0.2.4'});
    message.channel.send({ embeds: [exampleEmbed] });
}

exports.name = "commands";

