const { MessageEmbed } = require('discord.js');
module.exports = {
        name: "stats",
        arguments: 'none',
        usage: [`${process.env.PREFIX} uptime`],
        description: "Replies with the bot's stats",
        run: (client, message, args) => {
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
            
const exampleEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.addFields(
		{ name: 'Uptime', value: `${uptime}` },
		{ name: 'Ping with server', value: `${message.createdTimestamp - Date.now()}ms` },
	)

message.channel.send({ embeds: [exampleEmbed] });
}
}
exports.name = "uptime";

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