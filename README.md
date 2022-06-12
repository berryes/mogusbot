<br/>
<p align="center">
  <a href="https://github.com/berryes/mogusbot">
    <img src="logo.jpg" alt="Logo" width="80" height="80" style="border-radius: 2em">
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
* [WIP](#wip)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

The mogusbot is one of my many projects that actually I feel like working on.

The mogusbot is a powerfull discord management bot tool. It has multiple core features such as. Monitoring and data collection with prometheus x grafana. Musicbot, logging, advanced moderation and custom language support!

## Getting Started

Here are some information you need before running the bot!

### Prerequisites

You will need a mysql databse for it to work
Any pc/vps/raspberry pi with at least 1 GB of ram.
And NodeJS 16.X

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
4. Create a `.env` file in the root folder and fill out with you're information
```env
#bot 
API_KEY=
LOGGING=FALSE
PREFIX=.s
ADMIN_ROLE=


# Database 
DB_NAME=databasename
DB_USER=username
DB_PASS=password
DB_LOCATION=localhost
DB_TYPE=mysql
DB_STORAGE=database
DB_PORT=3306

#Other
CAT_API_KEY=magicnumber


```



## Usage

This bot was built on regular prefix chat commands. /commands do not work. Every command has start with the given prefix (.s by default) and must be a valid command. Everytime the user send a message to any channel the bot has access to it has a chance to reply with any of the images given by the users! 

## WIP 
The bot has many features right now but not the ones listed down below. (still in developement)
* Fixing nested code
* Optimalization
* Better ram usage
* Phrometheus exporter
* Moderation tool
* Documents

## License
No license to be found. Use this as you want to.
## Authors

* **berry** - *Software Developer (somewhat)* - [berryes](https://github.com/berryes/)

## Acknowledgements

* [ShaanCoding](https://github.com/ShaanCoding/)
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)
* [ImgShields](https://shields.io/)
* [Discordjs Guide](https://discordjs.guide/)
