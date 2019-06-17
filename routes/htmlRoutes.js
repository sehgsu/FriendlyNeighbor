var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Inventory.findAll({}).then(function(dbInventory){
      console.log("-------------------- DB INVENTORY -----------------");
      console.log();
      console.log("-------------------- DB INVENTORY -----------------");
     
      res.render("index", {
        inventory: dbInventory
      });
    }); 
  });

  app.get("/example/:id", function(req, res) {
    console.log("please come here")
    db.Inventory.findOne({ where: { id: req.params.id } }).then(function(dbInventory) {
      console.log("helloooooooooo")
      res.render("example", {
        Inventory: dbInventory,
        
      });
    });
  });

  app.get("")

// find user through username
  // app.get("/users/:username", function(req, res){
  //   db.users.findAll({ where: { id: req.params.username } }).then(function(dbUsers) {
  //     res.render(dbUsers);
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
