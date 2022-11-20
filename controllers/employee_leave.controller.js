'use strict';
const Leave = require('../models/leave.model');

exports.create = function(req, res) {
   const apply_leave = new Leave(req.body);

    Leave.create(apply_leave, function(err, leaveData) {
        if (err){
            res.send(err);
        }
        res.json({error:false,message:"Leave added successfully!",data:leaveData});
    });


};

exports.findAll = function(req, res) {
    Leave.findAll(function(err, leave) {
        console.log('controller')
        if (err){
            res.send(err);
        }    
        console.log('res', leave);
        res.send(leave);
    });
};