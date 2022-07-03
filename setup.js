const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?',
    validate: value => value < 18 ? `Nightclub is 18+ only` : true
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?'
  }
];

(async () => {
  const response = await prompts(questions);

  // => response => { username, age, about }
})();


#bot 
API_KEY=OTYwOTIyOTU4MTYxOTM2Mzg0.GZ8Lzn.69gRc3CT_UrTPgA1PHylrixD6HRIYI_-7pPeYs
LOGGING=TRUE
PREFIX=.s
API_PORT=9000


# Database 
DB_NAME=mogusbot
DB_USER=pterodactyluser
DB_PASS=nMHta7R55Gs5GZsY3BccBz
DB_LOCATION=db.berryez.xyz
DB_TYPE=mysql
DB_STORAGE=mogusbotus
DB_PORT=3306

#Other
CAT_API_KEY=46e8cc5e-13b4-40c6-9315-3516a4e898e2



