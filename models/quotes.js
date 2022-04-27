module.exports = (sequelize, DataTypes) => {
	return sequelize.define('quotes', {
		quote: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		nORp: {
			type: DataTypes.STRING
		},
	}, {
		timestamps: false,
	});
};