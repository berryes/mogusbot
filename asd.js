
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mogusbot', 'bot', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
	// SQLite only
	storage: 'database.mysql',
});

const Quotes = sequelize.define('quotes', {
	quote: {
		type: Sequelize.STRING,
	},
	norp: {
        type: Sequelize.TEXT,
    },
    addedBy: {
        type: Sequelize.TEXT,
    }
});

var negative = [
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
    "did i ask?",
    "i hate you for this",
    "the migthy mogus had put a curse on you",
    "fat fuck",
    "omg just shut the fuck up already",
    "Yo mamma so fat, the flight had to refuel 4 times go go around her!",
    "not too fond of gay ppl ay?",
    "Yo mamma so fat, it's easier to jump over her, than to go around!",
    "You wanna know what is an absolute banger? Me and ur mom every night",
    "I slept like 3 hours, sorry i spent the other 5 banging ur mother",
    "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo",
    "¿Qué mierda acabas de decir sobre mí, pequeña perra? Quiero que sepas que me gradué como el mejor de mi clase en los Navy Seals, y he estado involucrado en numerosas redadas secretas en Al-Quaeda, y tengo más de 300 muertes confirmadas. Estoy entrenado en la guerra de gorilas y soy el mejor francotirador de todas las fuerzas armadas de los EE. UU. No eres nada para mí, solo otro objetivo. Te aniquilaré con una precisión como nunca antes se ha visto en esta Tierra, recuerda mis jodidas palabras. ¿Crees que puedes salirte con la tuya diciéndome esa mierda por Internet? Piénsalo de nuevo, hijo de puta. Mientras hablamos, me estoy comunicando con mi red secreta de espías en los EE. UU. y tu IP está siendo rastreada en este momento, así que es mejor que te prepares para la tormenta, gusano. La tormenta que acaba con la patética cosita que llamas tu vida. Estás jodidamente muerto, chico. Puedo estar en cualquier lugar, en cualquier momento, y puedo matarte de más de setecientas formas, y eso es solo con mis propias manos. No solo estoy ampliamente entrenado en combate sin armas, sino que tengo acceso a todo el arsenal de la Infantería de Marina de los Estados Unidos y lo usaré en toda su extensión para borrar tu miserable trasero de la faz del continente, pequeña mierda. Si tan solo hubieras podido saber qué retribución profana estaba a punto de traerte tu pequeño comentario inteligente, tal vez te habrías callado la maldita lengua. Pero no pudiste, no lo hiciste, y ahora estás pagando el precio, maldito idiota. Cagaré furia sobre ti y te ahogarás en ella. Estás jodidamente muerto, chico",
]
var positive = [
    "i agree",
    "nice",
    "uwu",
    "i love you",
    "i will kindnap u just so we can be together",
    "there is no sus without us",
    "hi babe, buying me nitro?",
    "will u be my gf?",
    "my penis is 13 inches long",
    "i am motivated",
    "chad move",
    "i am in deeply love with you",
    "BABE 😫 STAAAAAPH",
    "you smell gay. i like it :3",
    "my server that i run on is overheating from your cuteness",
    "mi eres mi amante?",
    "no bitches?",
    "may the mighty mogus bless you",
    "Idk, but if I were you, I would buy a bigger condom!",
    "there is no god among us",
    "wanna have sex?",
    "u are my dilf bby girl",
    "Nice cock bro. Good girth, pretty nice curve, tip-to-shaft ratio is perfect; only issue is the colour consistency, it gets a little light near the tip. I give it an overall 8.7/10; now onto the cum velocity testing.",
    "u-uuuwaaaa~ OmO i-i let my boifwendu do a cummy cum in my boipucccwie~!!! and he didn't wear a boicondom O////O a-a-am i gonna get boipreggers now?? 3: i is too young to be a boimother! >///< c-c-can i getsies a boibortion? uwu c-can i pay my boinecologist with my boipucccwie-wucie? O////< p-perhaps i could offer him my tasty boimilk uwu. o-or m-maybe i'll ask if he will accept a pint of my sticky boisyrup instead UwU",
    "Welcome to the cum zone Only cum inside anime girls Quivering clit, double jointed pussy Fresh balls, elegant ejaculation First the kiss, then the cum My dick is in love with pain Co-op cock torture Stuff my dick into a furnace Stitch my cock shut Pressure cook my greasy balls Cumblast me and make it snappy Cum, cum, cum, cum, cum, cum, cum, cum Cum, cum, cum, cum, cum, cum, cum, cum Cum, cum, cum, cum, cum, cum, cum, cum Cum, cum, cum, cum, cum, cum, cum, cum What's all the cummotion? My dad fell into a cum shaft My dad glazed my face with cum Fertilize a baby with hunk spunk Cum spunk in my trunk Cum craving toddler Cum drippin' cunt Cummy Rae Jepsen Cum me maybe Cummy bottom boy Night of the living cum Nefarious cum mastermind Cum makes me fearless Cum crammer, cock slammer Cum slammed ya mum Mail your mums pieces of my dick Bazinga! Chug the cum, fug ya mum Fuck my asshole full of cum Three little words Get fucked, nerd Cum stuffer, jenkem huffer Fuck my cum puddle Bottom stuffer, semen huffer Would love a gator to fuck me Undercooked baby pig penises Help my dogs get a huge boner Water bong full of cat cum Accidentally fucked my own ass I barely had any dicks inside me Who ate all my cum? A mystery Cum detective hot on the trail Bees make honey, I make cummy",
    "My SUSSY POWERS ARE AWAKENING 😱😎 Part 1. I just did my daily jackoff ☺️ to my impostor body pillow, 😱 but when I came, 👻 I started floating, 😱 and think I got teleported into the skeld. 😮 I swear for a second I felt the imposter's strong hands grip my asscheeks.🤤 🍑 🍑 I immediately was transported back to earth, 😭 and I instantly got on all fours on my bed naked, 🤪 as you would, and started screaming in my best efforts to summon the imposter 💪 “IM READY FUCK ME FUCK ME FUCK ME FUCK ME PLEASE DADDY IMPOSTER” I was so close to feeling the imposters sweet cock fuck the shit out of me 🤤 but then my NAZI RACIST mother came in and beat the shit out of me. 😔😒🙁☹️ She then said I was going to a magical place called the “mental asylum” 🤔 I’m not too sure where that dimension is located but it sounds EPIC 😮",
    "sus af. i like it",
    "Our love wont be forbidden!",
    "Cause there is no cock like horse cock Send your asshole into shock You need horse cock of course-cock Grab the lube and slam the day away",
];

const user = 'admin'
for (var item in negative) {
    const dada = negative[item]
    const quoteD =  Quotes.create({
        quote: dada,
        norp: 'negative',
        addedBy: user,
    });
    
}
