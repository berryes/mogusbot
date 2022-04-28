module.exports = (sequelize, DataTypes) => {
	return sequelize.define('quotes', {
		quote: {
			type: DataTypes.STRING,

		},
		nORp: {
			type: DataTypes.STRING
		},
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
	}, 
	);
};
