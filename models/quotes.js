module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		quote: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		meaning: {
			type: DataTypes.STRING,
			defaultValue: 0,
			allowNull: false,
		},
	}, {
		timestamps: false,
	});
};