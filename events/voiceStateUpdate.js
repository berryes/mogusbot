// const { VoiceState } = require("discord.js");
// console.log(
//     "oldState: ",
//     oldState.member('542352964103176212').selfMute,
// );
// const vc = client.channels.cache.get('949605566966272010');
// const memberArray = vc.members.map(member => member.displayName)
// const memberString = memberArray.join('\n')
// console.log(memberString)
module.exports = (client, message,oldState,newState) => {
    console.log(oldState)
}
exports.name = "voice";
