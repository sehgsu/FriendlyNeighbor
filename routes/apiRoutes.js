var db = require("../models");

module.exports = function(app) {

  // Post item into db. Inventory. WORKING**

  app.post("/api/inventory", function(req, res) {
    db.Inventory.create(req.body).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });
  //Gets item info from db to render into index.hdb.WORKING**

  app.get("/api/item/", function(req, res){
    db.Inventory.findAll({}).then(function(Inventory){
      res.json(Inventory);
    });
  });


  app.get("api/users/", function(req, res){
    db.Users.findOrCreate({
      where: {first_name}, 
    }).then(function(Users) {
      console.log(Users.get({
        plain: true
      }))
      console.log(created)
    })
  })
  
  //transactions **not yet working*

  // app.get("/api/transaction/", function(req, res){
  //   db.Transaction.findAll({}).then(function(dbTransactions){
  //     res.json(dbTransactions);
  //   });
  // });
  
  //Gets item from inventory by product name.

  // app.get("/api/inventory/:product_name", function(req, res){
  //   db.Inventory.findAll({
  //     where: {
  //       product_name: req.params.product_name
  //     }
  //   }).then(function(dbInventory){
  //     res.json(dbInventory);
  //   });
  // })

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



