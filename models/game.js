module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define('Game',{
		score: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(model) {
				Task.belongsTo(model.User)
			}
		}
	})


	return Game

}