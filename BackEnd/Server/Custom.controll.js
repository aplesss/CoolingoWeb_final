const Customer = require("./Custom");

// Create and Save a new Customer
exports.create = (req, res) => {
    console.log("body",req.body);
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Customer
    const customer = new Customer(req.body);
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };
exports.login =(req,res)=>{
  console.log("bodys: "+ req.body.pwd);
 
   
    // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  Customer.login(req.body.username,req.body.pwd,(err,data)=>{
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer `
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id "  
        });
      }
    } else res.send(data);
  }); 

};
 
 

 

 
 