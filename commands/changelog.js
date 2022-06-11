const { MessageEmbed } = require('discord.js');
const changelog = new MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Mogus bot update!')
	.setURL('https://github.com/berryes/mogusbot')
	.setAuthor({ name: 'The mogus bot', iconURL: 'https://i.imgur.com/nH7tKhI.png', url: 'https://berryez.xyz/' })
	.setDescription('the mighty mogus bot has appeared with an update 0.0.3.5!')
	.setThumbnail('https://i.imgur.com/lfchERD.gif')
	.addFields(
		{ name: 'MUSIC!', value: 'Optimalization for the music bot has come. Better looking ui and also fixed backend functionalities' },
	)
	.setTimestamp()
	.setFooter({ text: 'Mogusbot version 0.0.3.0'});


exports.run = (client, message, args) => {
    message.channel.send('@everyone')
    message.channel.send({ embeds: [changelog] });
    message.delete()
}

exports.name = "changelog";

