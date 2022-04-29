<br/>
<p align="center">
  <a href="https://github.com/berryes/mogusbot">
    <img src="images/logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mogus Bot</h3>

  <p align="center">
    Basic DiscordJS-13 bot.
    <br/>
    <br/>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/berryes/mogusbot?color=dark-green) ![Issues](https://img.shields.io/github/issues/berryes/mogusbot) ![License](https://img.shields.io/github/license/berryes/mogusbot) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](images/screenshot.png)

The mogus bot is one of my many projects that actually succeeded(succeeded= finished).

I started it as a joke but it got out of hand really fast. I was enjoying my self too much. Made lot of functions, checks. Database management and I learned Linux on the way, since I was 24/7 running it on my VPS. 

## Getting Started

Here are some information you need before running the bot!

### Prerequisites

You will need a mysql databse for it to work.

### Installation

1. Download it, and extract it to a folder

OR
```sh
git clone https://github.com/berryes/mogusbot.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your API key in  in `config.json`

```JS
    "token": "your-very-long-api-key-here",

```
4. Change database login info in  `index.js`
```JS
    const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
	storage: 'database.mysql',
});

const chancheDB = new Keyv('mysql://username:password@localhost:3306/database');

```



## Usage

This bot was built on regular prefix chat commands. /commands do not work. Every command has start with the given prefix (.sus by default) and must be a valid command. Everytime the user send a message to any channel the bot has acces to, the noprefix reply command runs. If the random generator generates 1, the bot will reply to the user with a negative/positive "quote". This is just a fan part of the bot. Just to spice up everyday convertisations 

## Commands

- *chad* - Generates random image from chads folder.
- *randomsus* - Generates random word ending with us.
- *sussypic* - Generates random image from images folder.
- *random* -sussypic&randomsus combined
- *uptime* - Displays the bot's uptime.
- *commands* - Displays commands.
- *choose* - Chooses between items (.sus choose item1 item2 item3...)
- *quote [random text] | [positive/negative]* - adds a quote to the database as negative or positive. 
- *chance* - shows the chance to a random reply
- *chance set [number]* - sets the random reply chance value

### Creating A Pull Request



## License

Distributed under the MIT License. See [LICENSE](https://github.com/berryes/mogusbot/blob/main/LICENSE.md) for more information.

## Authors

* **Barna Mate** - *Software Developer* - [Barna Mate](https://github.com/berryes/) - *Made the bot*

## Acknowledgements

* [ShaanCoding](https://github.com/ShaanCoding/)
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)
* [ImgShields](https://shields.io/)
