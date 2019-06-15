var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users/", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // get user data by username
  app.get("/api/users/:username/", function(req, res) {
    db.Users.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/transaction/", function(req, res) {
    db.Transaction.findAll({}).then(function(dbTransactions) {
      res.json(dbTransactions);
    });
  });

  app.get("/api/inventory/", function(req, res) {
    db.Inventory.findAll({}).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });

  // getting an item in the inventory by product name
  app.get("/api/inventory/:product_name", function(req, res) {
    db.Inventory.findAll({
      where: {
        product_name: req.params.product_name
      }
    }).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete an inventory by id
  app.delete("/api/inventory/:id", function(req, res) {
    db.Inventory.destroy({ where: { id: req.params.id } }).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });
};
