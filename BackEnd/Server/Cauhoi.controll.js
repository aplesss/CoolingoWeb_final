const cauhoi = require("./Cauhoi");
exports.getCauhoi=(req,res)=>
{
    if (!req.query) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    cauhoi.getCauhoi(req.query.macd,req.query.capdo,(err,data)=>{
        if(err)
        {
            if(err.kind==="not_found")
            {
                res.status(404).send({
                    message: `Not found Cau hoi`
                  });
            }
            else
            {
                res.status(500).send({
                    message: "Error retrieving  "  
                  });
            }
        }else
        {
            res.send(data);
        }
    });
 

};