

//database create & use
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
    host: `${process.env.DB_LOCATION}`,
    dialect: `${process.env.DB_TYPE}`,
    logging: false,
    // SQLite only
    storage: `${process.env.DB_STORAGE}.${process.env.DB_TYPE}`,
});

replyfun = async (type,data) => {
    return
    const id = data[0].guild.id
    const dataDb = sequelize.define(`data_${id}`, {
        name: {
            type: Sequelize.STRING,
        },
        id: {
            type: Sequelize.TEXT,
        },
        messages: {
            type: Sequelize.INTEGER,
        },
        most_used_state: {
            type: Sequelize.TEXT,
        },
        most_played_game: {
            type: Sequelize.TEXT,
        },
        pictures_sent: {
            type: Sequelize.INTEGER,
        },
        videos_sent: {
            type: Sequelize.TEXT,
        },
        voice_channel_joins: {
            type: Sequelize.TEXT,
        },
        time_spent_in_voice_channel: {
            type: Sequelize.TEXT,
        },
        commands_used: {
            type: Sequelize.INTEGER,
        },
        roles: {
            type: Sequelize.TEXT,
        },
        warnings: {
            type: Sequelize.TEXT,
        },
    })  
    dataDb.sync()
    
    const lastDATA = await dataDb.findOne({
        where: { id: `${data[0].author.id}` },
      });
      if(!lastDATA){console.log("no data in database")}

switch(type){
    case 'message':
        console.log(data[0].id)
        console.log(data[0].author.id)
        console.log(data[0].author.username)
        console.log(data[0].author.discriminator)

        break;
}
}
module.exports = replyfun;

