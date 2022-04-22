exports.run = (client, message, args, ) => {
    const noprefixExport = require('../index')
    noprefixCommandus = JSON.stringify(noprefixExport)
    message.channel.send(`${noprefixCommandus}`).catch(console.error);
    console.log(`listnoprefix has been run values: ${noprefixCommandus}`)
}
exports.name = "listnoprefix";
