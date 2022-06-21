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

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [WIP](#wip)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

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


## WIP 
The bot has many features right now but not the ones listed down below. (still in developement)
* Fixing nested code
* Optimalization
* Better ram usage
* Phrometheus exporter
* Moderation tool
* Documents


## Authors

* **berry** - *Software Developer (somewhat)* - [berryes](https://github.com/berryes/)

## Acknowledgements

* [ShaanCoding](https://github.com/ShaanCoding/)
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)
* [ImgShields](https://shields.io/)
* [Discordjs Guide](https://discordjs.guide/)
