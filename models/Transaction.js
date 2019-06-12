module.exports = function(sequelize, DataTypes) {
var Transaction = sequelize.define("Transactions", {
    accepted: DataTypes.BOOLEAN,
    denied: DataTypes.BOOLEAN,
    counter_offer: DataTypes.STRING
  });
  return Transaction;
};