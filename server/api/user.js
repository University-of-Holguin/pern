var models = require("../database/models");

exports.findAllUsers = function(req, res) {
  models.User.findAll({
    include: [
      { model: models.Post, as: "posts" },
      { model: models.Comment, as: "comments" }
    ]
  })
    .then(function(response) {
      res.send(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
