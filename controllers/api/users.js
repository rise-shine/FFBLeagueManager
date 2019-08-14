const router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
  console.log("Hi");
});

router.get("/welcome", function(req, res) {
  db.User.findAll({})

    .then(function(response) {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    });
});

// After the user signs in, the code will read the DB. Then, it will render the friends in the welcome page
router.get("/welcome/:email/:password", function(req, res) {
  db.User.findOne({
    where: {
      email: req.params.email
    }
  })

    .then(function(response) {
      if (response == null) {
        console.log("response value is null");
        res.json({
          userID: "invalid",
          name: "invalid"
        });
      } else if (req.params.password === response.dataValues.password) {
        console.log(
          response.dataValues.id,
          response.dataValues.name,
          response.dataValues.email
        );
        res.json({
          userID: response.dataValues.id,
          name: response.dataValues.name
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/create", function(req, res) {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  db.User.create({
    name: name,
    email: email,
    password: password
  })
      .then(function(response) {
      console.log(response.dataValues.id, response.dataValues.name);
      res.json({
        userID: response.dataValues.id,
        name: response.dataValues.name
      });
    })
    .catch(err => {
      console.log(err);
    });
});


module.exports = router;
