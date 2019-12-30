const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  console.log(customer);
  this.matk=customer.matk;
  this.username= customer.username;
  this.pwd =customer.pwd;
  this.quyen=customer.quyen;
};

Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO TAIKHOAN SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { matk: res.insertId, ...newCustomer });
    result(null, { matk: res.insertId, ...newCustomer });
  });
};
Customer.login= (username,pwd,result)=>{
  console.log(username+" "+pwd);
  sql.query(`SELECT * FROM TAIKHOAN WHERE USERNAME = "${username}" AND PWD = "${pwd}" `,(err,res)=>{
      if(err){
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found customer: ", res);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
  });
};

module.exports = Customer;