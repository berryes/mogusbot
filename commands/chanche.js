const Keyv = require('keyv');
const keyv = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
const { member } = require('discord.js')
const chancheDB = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
const chancheValue = 0
exports.run = (client, message, args, roles) => {
        (async () => {
            // true
            await chancheDB.set("chanche", args[0]);
            const chancheValue = await chancheDB.get('chanche');
            await message.channel.send(` Reply chanche set to : 1/${chancheValue}`)
        })();

}

exports.name = "chanche";


