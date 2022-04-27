const Keyv = require('keyv');
const keyv = new Keyv('mysql://bot:root@localhost:3306/mogusbot');

const prefixes = new Keyv('mysql://bot:root@localhost:3306/mogusbot');
const asd = ''
exports.run = (client, message, args) => {
    (async () => {
        // true
        await prefixes.set("prefix", args[0]);
        const asd = await keyv.get('prefix');
        await message.channel.send(`${asd}`)
    })();


    console.log(asd)
}

exports.name = "prefix";

