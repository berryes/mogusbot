const { MessageEmbed } = require('discord.js');
const changelog = new MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Mogus bot update!')
	.setURL('https://github.com/berryes/mogusbot')
	.setAuthor({ name: 'The mogus bot', iconURL: 'https://i.imgur.com/nH7tKhI.png', url: 'https://berryez.xyz/' })
	.setDescription('the mighty mogus bot has appeared with an update 0.0.2.9!')
	.setThumbnail('https://i.imgur.com/lfchERD.gif')
	.addFields(
		{ name: 'Better optimalization', value: 'The bots response is now even more sexier, and a lot of bugs have been fixed!' },
		{ name: 'New help command!', value: 'Complete idiot? No idea how to use a command? ask with .sus help (command name) '},
		{ name: 'New cat command!', value: 'use .sus cat / .sus cat delete to get a random pic of a cat', },
	)
	.setTimestamp()
	.setFooter({ text: 'Mogusbot version 0.0.2.9'});


exports.run = (client, message, args) => {
    message.channel.send('@everyone')
    message.channel.send({ embeds: [changelog] });
    message.delete()
}

exports.name = "changelog";

