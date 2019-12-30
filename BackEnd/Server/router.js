module.exports = app => {
    const customers = require("./Custom.controll");
    const chude =require("./Chude.controll");
    const cauhoi = require("./Cauhoi.controll");
    // Create a new Customer
    app.post("/register", customers.create);
    app.post("/login", customers.login);
    app.get("/getchude",chude.getAll);
    app.get("/getcauhoi",cauhoi.getCauhoi);
    app.get("/getlevel",chude.getLesson);
  };