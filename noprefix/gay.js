var lines = [
    "thats kinda sus ngl",
    "yeah, noone cares",
    "fuck off",
    "twat, yes thats what you are",
    "you should kill your self now",
    "my balls hurt",
    "no i am not insulting people for fun. not at all.",
    "thats gay",
    "no one loves you",
    "you mama so fat, the whole planet faked a virus just so she wears a mask",
    "bro cost 10 elixir",
    "EL GATOOOO 😭😭😭😭",
    "i think i have HIV",
    "i broke my dick",
    "fag",
    "fat fuck",
    "omg just shut the fuck up already",
    "You wanna know what is an absolute banger? Me and ur mom every night",
    "I slept like 3 hours, sorry i spent the other 5 banging ur mother",
    "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo",
    "Nice cock bro. Good girth, pretty nice curve, tip-to-shaft ratio is perfect; only issue is the colour consistency, it gets a little light near the tip. I give it an overall 8.7/10; now onto the cum velocity testing.",
    "u-uuuwaaaa~ OmO i-i let my boifwendu do a cummy cum in my boipucccwie~!!! and he didn't wear a boicondom O////O a-a-am i gonna get boipreggers now?? 3: i is too young to be a boimother! >///< c-c-can i getsies a boibortion? uwu c-can i pay my boinecologist with my boipucccwie-wucie? O////< p-perhaps i could offer him my tasty boimilk uwu. o-or m-maybe i'll ask if he will accept a pint of my sticky boisyrup instead UwU",
    "Welcome to the cum zone Only cum inside anime girls Quivering clit, double jointed pussy Fresh balls, elegant ejaculation First the kiss, then the cum My dick is in love with pain Co-op cock torture Stuff my dick into a furnace Stitch my cock shut Pressure cook my greasy balls Cumblast me and make it snappy Cum, cum, cum, cum, cum, cum, cum, cum Cum, cum, cum, cum, cum, cum, cum, cum Cum, cum, cum, cum, cum, cum, cum, cum Cum, cum, cum, cum, cum, cum, cum, cum What's all the cummotion? My dad fell into a cum shaft My dad glazed my face with cum Fertilize a baby with hunk spunk Cum spunk in my trunk Cum craving toddler Cum drippin' cunt Cummy Rae Jepsen Cum me maybe Cummy bottom boy Night of the living cum Nefarious cum mastermind Cum makes me fearless Cum crammer, cock slammer Cum slammed ya mum Mail your mums pieces of my dick Bazinga! Chug the cum, fug ya mum Fuck my asshole full of cum Three little words Get fucked, nerd Cum stuffer, jenkem huffer Fuck my cum puddle Bottom stuffer, semen huffer Would love a gator to fuck me Undercooked baby pig penises Help my dogs get a huge boner Water bong full of cat cum Accidentally fucked my own ass I barely had any dicks inside me Who ate all my cum? A mystery Cum detective hot on the trail Bees make honey, I make cummy"
]
// make it so it doesn't generate the same shit again after twice
exports.run = (client, message, args) => {
    var random = Math.floor(Math.random() * lines.length);
    var reply = lines[random]
    message.channel.send(reply);
}

exports.name = "gay";

