const log = require("../functions/vcLog")
module.exports = (Client,oldState,newState) => {
    if(newState.selfDeaf == true && oldState.selfDeaf == false){ console.log("deafened"), log("deafened",oldState,newState,Client)} else if(newState.selfDeaf == false && oldState.selfDeaf == true){console.log("undeafened"),log("undeafened",oldState,newState,Client)}
    if(newState.selfMute == true && oldState.selfMute == false){ console.log("muted"),log("muted",oldState,newState,Client)} else if(newState.selfMute == false && oldState.selfMute == true){console.log("unmuted"), log("unmuted",oldState,newState,Client)}
    if(!newState.channelId){ console.log("left the channel"), log("left",oldState,newState,Client) }
    if(newState.channelId && !oldState.channelId){ {console.log("joined the channel"), log("joined",oldState,newState,Client) }}
    else if(newState.channelId !== oldState.channelId && newState.channelId){console.log("moved channels"),log("moved",oldState,newState,Client)}        

}
exports.name = "voice";
