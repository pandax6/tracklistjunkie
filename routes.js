const routes = (module.exports = require("next-routes")());

routes
  .add({ name: "index", pattern: "/", page: "index" })
  .add({ name: "home", pattern: "/home", page: "home" })
  //.add({ name: "edit", pattern: "/edit?=id", page: "edit" })
  .add({ name: "create", pattern: "/create", page: "create" })
  .add({ name: "show", pattern: "/show/:id", page: "show" })
  .add({ name: "login", patter: "/login", page: "login" });
