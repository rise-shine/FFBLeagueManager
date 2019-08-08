const router = require("express").Router();
var db = require("../../models");

// After the user signs in, this route will be called.
router.get("/list/:id", function(req, res) {
  // The code will read the Friends table and look for friends added by the user who's logged in.
  db.Friend.findAll({
    where: {
      UserId: req.params.id
    },
    include: [db.User]
  })
    // Then, it will render the friends list on the welcome page.
    .then(function(response) {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    });
});
