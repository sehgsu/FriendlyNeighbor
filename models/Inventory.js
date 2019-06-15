module.exports = function(sequelize, DataTypes) {
 var Inventory = sequelize.define("Inventory", {
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
      
});
return Inventory;
};