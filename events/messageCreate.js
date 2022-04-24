module.exports = (client, message) => {
  // Ignore all bots
  const [noprefixCommand,noprefixList] = require("../index");
  if (message.author.bot) return;

  function notprefix() {
    text = message.content
    for (let x in noprefixList) {
      if (text.includes(noprefixList[x])) {
        const commandus = noprefixCommand.get(noprefixList[x])
        commandus.run(client,message)
      }}}

  // Ignore messages not starting with the prefix (in config.json)
  if  (message.content.indexOf(client.config.prefix) !== 0) {  
    notprefix()
  };



  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};