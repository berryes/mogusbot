

const listeningList = ["mogusbeats",
"spotify",
"Among drip 10 hour bass boosted sussy baka edition premium plus x ++ pro ultimate superior X+ S",
"red discussing why he is not the imposter",
]
const watchingList = ["over the server",
"you",
"as red climbes out of the vent. sussy",
"the tv",
"your dogs",
"the impostor getting killed"
]

function radnomRichpresence(){
  let random = Math.floor(Math.random() * 2);
  if (!random == 1){
    let richValue = Math.floor(Math.random() * listeningList.length);
    client.user.setActivity(`${listeningList[richValue]}`, {type: "LISTENING",});
  }
  else{
    let richValue = Math.floor(Math.random() * watchingList.length);
    client.user.setActivity(`${watchingList[richValue]}`, {type: "WATCHING",});
}}
module.exports = radnomRichpresence