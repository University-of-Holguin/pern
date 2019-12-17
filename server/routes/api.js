var user = require("../api/user");

exports.init = function(app) {
  app.get("/users", user.findAllUsers);
};
