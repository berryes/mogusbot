const Keyv = require('keyv');
const chancheDB = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
const chancheValue = 0
const adminrole = '968842654584557578'
// todo: check if user has the Sussy Rank, and only let the ones who have it allow to change it
exports.run = (client, message, args, roles) => {
        (async () => {
            if (message.member.roles.cache.has(adminrole)){
                await chancheDB.set("chanche", args[0]);
                const chancheValue = await chancheDB.get('chanche');
                await message.channel.send(` Reply chanche set to : 1/${chancheValue}`)
            }
            else {
                await message.channel.send('You dont have permision for this... sussy baka')
            }
            // true

        })();

}

exports.name = "chanche";


