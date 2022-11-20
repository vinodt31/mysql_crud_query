'use strict';
var dbConn = require('./../config/db.config');

//leave object create
var Leave = function(leave){
    this.emp_id = leave.emp_id,
    this.from_date = leave.from_date,
    this.to_date = leave.to_date
}

Leave.create = function(newEmp, result){
    console.log("leave model : ",newEmp, "-------",result);
    dbConn.query("INSERT INTO employee_leave SET ?",newEmp, function(err, res){
        if(err){
            result(err,null);
        }else{
            result(null,res.insertId);
        }
    });
};

module.exports = Leave;