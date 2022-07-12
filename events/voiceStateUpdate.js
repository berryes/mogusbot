const log = require("../functions/vcLog")
module.exports = (Client,oldState,newState) => {
    if(newState.selfDeaf == true && oldState.selfDeaf == false){ log("deafened",oldState,newState,Client)} else if(newState.selfDeaf == false && oldState.selfDeaf == true){log("undeafened",oldState,newState,Client)}
    if(newState.serverDeaf == true && oldState.serverDeaf == false){ log("serverdeafened",oldState,newState,Client)} else if(newState.serverDeaf == false && oldState.serverDeaf == true){log("serverundeafened",oldState,newState,Client)}
    if(newState.selfMute == true && oldState.selfMute == false){ log("muted",oldState,newState,Client)} else if(newState.selfMute == false && oldState.selfMute == true){ log("unmuted",oldState,newState,Client)}
    if(newState.serverMute == true && oldState.serverMute == false){ log("servermuted",oldState,newState,Client)} else if(newState.serverMute == false && oldState.serverMute == true){ log("serverunmuted",oldState,newState,Client)}
    if(!newState.channelId){log("left",oldState,newState,Client) }
    if(newState.channelId && !oldState.channelId){ log("joined",oldState,newState,Client) }
    else if(newState.channelId !== oldState.channelId && newState.channelId){log("moved",oldState,newState,Client)}        
}
exports.name = "voice";
