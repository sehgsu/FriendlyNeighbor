module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    product_name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  });
  return Inventory;
};
