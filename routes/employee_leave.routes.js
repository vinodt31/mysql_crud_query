const express = require("express");
const router = express.Router()


const employeeleaveController = require("../controllers/employee_leave.controller.js");

//router.get("/",employeeleaveController.findAll);
router.post('/', employeeleaveController.create);

module.exports = router