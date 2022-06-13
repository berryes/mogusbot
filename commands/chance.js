const { MessageEmbed } = require('discord.js');
const Keyv = require('keyv');
const chancheDB = new Keyv(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOCATION}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const chancheValue = 0
const chancheType = 0
const adminrole = `${process.env.ADMIN_ROLE}`

    module.exports = {
        name: "chance",
        arguments: 'set, current',
        usage: [`${process.env.PREFIX} chance set reply (number)`,`${process.env.PREFIX}chance set type (1-100)`],
        description: "Set the reply chanche and the type of reply",
        run: (client, message, args) => {
        (async () => {
            const textEmbed = new MessageEmbed()
	            .setTimestamp()

            if (message.member.roles.cache.has(adminrole)){
                if (args[0] == 'set') {
                    if (args[1] == 'reply'){

                        // if nothing is declared
                        if (!args[2]){
                            textEmbed.setFields({ name: 'Error', value: 'You need to declare a number!' },);
                            textEmbed.setColor('DARK_RED')
                            message.reply({ embeds: [textEmbed] })}

                         // if the argument is a letter   
                        else if (isNaN(args[2])){
                            textEmbed.setFields({ name: 'Error', value: 'The reply chance can be only a number!' },);
                            textEmbed.setColor('DARK_RED')
                            message.reply({ embeds: [textEmbed] })}
                        
                        // successfully set the chance
                        else {
                            await chancheDB.set(`${message.guild.id}`, args[2]);
                            const chancheValue = await chancheDB.get(`${message.guild.id}`);
                            textEmbed.setFields({ name: 'Success', value: `The reply chanche has been set to 1/${chancheValue}` },);
                            textEmbed.setColor('GREEN')
                            message.reply({ embeds: [textEmbed] })}}
                // reply type
                /* if (args[1] == 'type'){
                    if (!args[2]){
                        textEmbed.setFields({ name: 'Error', value: 'You need to declare a number!' },);
                        textEmbed.setColor('DARK_RED')
                        message.reply({ embeds: [textEmbed] })
                    }
                    else if (isNaN(args[2])){
                        textEmbed.setFields({ name: 'Error', value: 'The reply chance can be only a number!' },);
                        textEmbed.setColor('DARK_RED')
                        message.reply({ embeds: [textEmbed] })
                    }
                    else if (args[2] > 100){
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
                } */
            }
            else {
                if (args[0] == 'current'){
                    const chacheType = await chancheDB.get('chacheType');
                    const chancheValue = await chancheDB.get('chanche');
                    textEmbed.setFields({ name: 'The chanche for a random reply is', value: `${chancheValue}` },{ name: 'The chanche for a quote reply is ', value: `${chancheType}` },);
                    textEmbed.setColor('GREEN')
                    message.reply({ embeds: [textEmbed] })}}}
                
                    // if no admin role
            else {
                await message.reply('You dont have permision for this... sussy baka')
            } // end of checkrole

        })(); // end of async function
} // end of export run
    }

exports.name = "chance";


