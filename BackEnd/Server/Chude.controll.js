const chude = require("./Chude");
exports.getAll =(req,res)=>
{  
    chude.getAll((err,data)=>{
        if(err)
        {
            res.status(500).send({
               message: err.message || "Some eroor occured while get data from table Chude" 
            });
        }
        else  res.send(data);
    });
};
exports.getLesson =(req,res)=>
{  
    chude.getLesson(req.query.macd,(err,data)=>{
        if(err)
        {
            res.status(500).send({
               message: err.message || "Some eroor occured while get data from table Chude" 
            });
        }
        else  res.send(data);
    });
};