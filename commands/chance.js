const { MessageEmbed } = require('discord.js');
const Keyv = require('keyv');
const chancheDB = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
const chancheValue = 0
const chancheType = 0
const adminrole = '968842654584557578'
const textEmbed = new MessageEmbed()
	.setTimestamp()

exports.run = (client, message, args) => {
        (async () => {
            if (message.member.roles.cache.has(adminrole)){
                
                if (args[0] == 'set') {
                    if (args[1] == 'reply'){
                        if (isNaN(args[2])){
                            textEmbed.setFields({ name: 'Error', value: 'The reply chance can be only a number!' },);
                            textEmbed.setColor('DARK_RED')
                            message.reply({ embeds: [textEmbed] })
                        }
                        else {
                            await chancheDB.set("chanche", args[2]);
                            const chancheValue = await chancheDB.get('chanche');
                            textEmbed.setFields({ name: 'Success', value: `The reply chanche has been set to 1/${chancheValue}` },);
                            textEmbed.setColor('GREEN')
                            message.reply({ embeds: [textEmbed] })
                        }
                }
                if (args[1] == 'type'){
                    if (isNaN(args[2])){
                        textEmbed.setFields({ name: 'Error', value: 'The reply chance can be only a number!' },);
                        textEmbed.setColor('DARK_RED')
                        message.reply({ embeds: [textEmbed] })
                    }
                    if (args[2] > 100){
                        textEmbed.setFields({ name: 'Error', value: `The reply chance type can't be higher than 100` },);
                        textEmbed.setColor('DARK_RED')
                        message.reply({ embeds: [textEmbed] })
                    }
                    else {
                        await chancheDB.set("chacheType", args[2]);
                        const chacheType = await chancheDB.get('chacheType');
                        textEmbed.setFields({ name: 'Succes', value: `The reply chanche type has been set to ${chacheType}%.` },);
                        textEmbed.setColor('GREEN')
                        message.reply({ embeds: [textEmbed] })
                    }
                }
            }
            else {
                if (args[0] == 'asd'){
                    const chacheType = await chancheDB.get('chacheType');
                    const chancheValue = await chancheDB.get('chanche');
                    textEmbed.setFields({ name: 'The chanche for a random reply is', value: `${chancheValue}` },{ name: 'The chanche for a quote reply is ', value: `${chancheType}` },);
                    textEmbed.setColor('GREEN')
                    message.reply({ embeds: [textEmbed] })
                }
            }
        }

            else {
                await message.reply('You dont have permision for this... sussy baka')
            } // end of checkrole

        })(); // end of async function
} // end of export run


// create an embed to make it more appealing. text is ugly

exports.name = "chanche";


