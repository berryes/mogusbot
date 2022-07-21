const { MessageEmbed } = require('discord.js');
module.exports =  {
        name: "stats",
        arguments: 'none',
        type: "System",
        usage: [`${process.env.PREFIX} uptime`],
        description: "Replies with the bot's stats",
        run: async (client, message, args) => {
    let days = 0
    let week = 0
    let uptime = '';
    let totalSeconds = (client.uptime / 1000)
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Math.floor(totalSeconds % 60)
    if (hours > 24) {
    days = days + 1
    hours = 0
            }
    if (week - 0) {
    uptime += `${week} week, `
            }
    if (minutes > 60) {
    minutes = 0;
            }
            uptime += `My uptime is: ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`

            const Keyv = require('keyv');
            const keyv = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
            
let Replyfun = ''
let Log = ''
let customprefix =  await keyv.get(`prefixes_${message.guild.id}`)
if(process.env.REPLY_FUN == 'True'){Replyfun = 'Enabled ✅'} else{ Replyfun = 'Disabled ❌'}
if(client.logchannel.get(message.guild.id)){Log = 'Enabled ✅'} else{ Log = 'Not set ❌'}
const embed = new MessageEmbed()
	.setColor('RANDOM')
	.addFields(
		{ name: 'Uptime', value: `${uptime}` },
		{ name: 'Ping with server', value: `${message.createdTimestamp - Date.now()}ms` },
		{ name: 'Replyfun', value: `${Replyfun}` },
		{ name: 'Logging', value: `${Log}` },
		{ name: 'Prefixes set', value: `${customprefix}` },
	)

message.channel.send({ embeds: [embed] });
}
}


// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⣠⣤⣤⣤⣤⣤⣀⣀⠉⠻⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠄⣾⣬⣽⣿⣿⣿⣿⡿⢿⣿⣆⠈⢻⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⣞⡉⢩⣙⣿⡿⠉⠄⣠⣤⠤⠉⠄⠄⢿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⠁⣼⣿⣿⣯⣿⣿⠁⢰⣾⣦⡤⠄⢀⣶⡀⠸⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⡏⢀⣿⣿⣿⣿⣿⠟⠁⠄⠈⢿⣿⣿⣿⣿⡇⠄⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿⣿⡟⠛⠃⡠⠄⠄⠄⠈⣿⣿⣿⣿⡇⠄⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⠄⣿⣿⣿⣶⣾⣿⣿⣿⣤⣤⣄⣘⣿⣿⠁⡀⠄⢻⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⡇⢰⣿⣿⣿⣿⣿⣏⣉⣽⣿⣿⣿⣿⣿⣿⣿⣿⠄⢸⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⠄⣼⣿⣁⣸⣿⣿⣿⣿⣿⡿⠟⠉⠙⠋⠹⠟⠁⠄⢸⣿⣿⣿
// ⣿⣿⣿⣿⣿⡏⢀⣿⣿⣿⣿⠋⢠⣤⣤⣤⣤⠈⢿⣿⣷⣦⣄⠄⠄⢸⣿⣿⣿
// ⣿⠋⣀⣤⣄⣠⣼⣿⣿⣿⣿⡀⢹⣿⣿⣿⣿⠄⢸⣿⣿⣿⣿⣿⠄⢸⣿⣿⣿
// ⣧⠄⢿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢸⠿⠛⠉⣁⣠⣿⣿⣿⣿⣿⣿⠄⣼⣿⣿⣿
// ⣿⣷⣄⣉⠉⠉⢉⣉⣉⣁⣤⣾⡏⠄⣾⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣈⠙⠛⠛⠟⠛⠛⢉⣁⣤⣾⣿⣿⣿⣿