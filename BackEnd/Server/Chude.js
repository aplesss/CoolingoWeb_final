const sql = require("./db.js");
const Chude=function(chude)
{
    this.macd=chude.macd;
    this.tencd=chude.tencd;
    this.nguphap=chude.nguphap;
};
Chude.getAll= result =>
{  
    sql.query("SELECT * FROM CHUDE",(err,res)=>{
        if(err)
        {
            console.log("error:", err);
            result(null,err);
            return;
        }
        console.log("result: ",res);
        result(null, res);
    });
};
Chude.getLesson=(macd,result) =>
{
    sql.query(`SELECT DISTINCT CAPDO FROM NDUNG WHERE MACD = ${macd}`,(err,res)=>{
        if(err)
        {
            console.log("error:", err);
            result(null,err);
            return;
        }
        console.log("result: ",res);
        result(null, res);
    });
}
module.exports= Chude;