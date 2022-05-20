const { MessageEmbed } = require('discord.js');
const changelog = new MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Mogus bot update!')
	.setURL('https://github.com/berryes/mogusbot')
	.setAuthor({ name: 'The mogus bot', iconURL: 'https://i.imgur.com/nH7tKhI.png', url: 'https://berryez.xyz/' })
	.setDescription('the mighty mogus bot has appeared with an update 0.0.3.0!')
	.setThumbnail('https://i.imgur.com/lfchERD.gif')
	.addFields(
		{ name: 'MUSIC!', value: 'Lost of other bots can do the same, i know. But the mighty mogus is just.. better you know.' },
		{ name: 'Soon music control panel', value: 'I am currently working on a frontend for the mogus. Soon it will be hosted on my webiste'},
	)
	.setTimestamp()
	.setFooter({ text: 'Mogusbot version 0.0.3.0'});


exports.run = (client, message, args) => {
    message.channel.send('@everyone')
    message.channel.send({ embeds: [changelog] });
    message.delete()
}

exports.name = "changelog";

