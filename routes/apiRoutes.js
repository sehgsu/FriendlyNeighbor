var db = require("../models");

module.exports = function(app) {

  // Post item into db. Inventory.

  app.post("/api/inventory", function(req, res) {
    db.Inventory.create(req.body).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });

  // Get user data by username.

  app.get("/api/users/:username/", function(req,res){
    db.Users.findOne({ 
      where: {username: req.params.username}
     }).then(function(dbUsers){
      res.json(dbUsers);
    });
  });

  //transactions **not yet working*

  app.get("/api/transaction/", function(req, res){
    db.Transaction.findAll({}).then(function(dbTransactions){
      res.json(dbTransactions);
    });
  });

    //Gets item info from db to render into index.hdb.

  app.get("/api/item/", function(req, res){
    db.Inventory.findAll({}).then(function(Inventory){
      res.json(Inventory);
    });
  });

  //Gets item from inventory by product name.

  app.get("/api/inventory/:product_name", function(req, res){
    db.Inventory.findAll({
      where: {
        product_name: req.params.product_name
      }
    }).then(function(dbInventory){
      res.json(dbInventory);
    });
  })

  // Create a new user through login **Not yet working**
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete an inventory by id **Not yet working**
  app.delete("/api/inventory/:id", function(req, res) {
    console.log("HI");
    db.Inventory.destroy({
       where: { 
         id: req.params.id 
        }
       }).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });


};



