var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        msg: "Welcome!",
      });
    });

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
