const sql = require("./db.js");
const Cauhoi =function(cauhoi){
    this.macd=cauhoi.macd;
    this.capdo=cauhoi.capdo;
    this.mach=cauhoi.mach;
    this.load=cauhoi.loai;
    this.ndungch=cauhoi.ndungch;
    this.dapan=cauhoi.dapan;
};
Cauhoi.getCauhoi=(macd,capdo,result)=>{
    sql.query(`SELECT * FROM NDUNG WHERE MACD=${macd} AND CAPDO=${capdo}`,(err,res)=>{
        if(err)
        {
            result(err,null);
            return;
        }
        if(res.length)
        {
            console.log(res);
            result(null,res);
            return;
        }
        result({kind:"not_found"},null);
    });
}
module.exports=Cauhoi;
 