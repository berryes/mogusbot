const { MessageEmbed } = require('discord.js');
const changelog = new MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Mogus bot update!')
	.setURL('https://github.com/berryes/mogusbot')
	.setAuthor({ name: 'The mogus bot', iconURL: 'https://i.imgur.com/nH7tKhI.png', url: 'https://berryez.xyz/' })
	.setDescription('the mighty mogus bot has appeared with update 0.0.2.4! (A BIG UPDATE!)')
	.setThumbnail('https://i.imgur.com/lfchERD.gif')
	.addFields(
		{ name: 'Adding quotes/images', value: 'From now on, you need to use the .sus add quote to add a qoute as before. Also, now you can add images to the random reply database. Just send the image with .sus add image and it gets added!' },
		{ name: 'New chanche setting!', value: 'As before, you can change the reply chance. Because of the added image reply, now you can change the ratio between them! .sus chance set type 100 = 100% chanche for quote reply. And vice versa'},
		{ name: 'New rich presence!', value: 'Watch the bots description for suprises!', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setTimestamp()
	.setFooter({ text: 'Mogusbot version 0.0.2.4'});


exports.run = (client, message, args) => {
    message.channel.send('@everyone')
    message.channel.send({ embeds: [changelog] });
    message.delete()
}

exports.name = "changelog";

