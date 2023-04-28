const express = require("express");
const router = express.Router();
const Employee = require("../model/Employee");



router.post("/create", async (req, res, next) => {
  const name = req.body.e_name;
  const address = req.body.e_address;
  const age = req.body.e_age;
  const department = req.body.e_department;
  const status = req.body.e_status;
  const lat = req.body.lat;
  const long = req.body.long;
  try {
    const employee = new Employee({
      name,
      address,
      age,
      department,
      status,
      lat,
      long,
    });
    let res_emp = await employee.save();
    res.send({ message: "Employee created successfully!" });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

router.post("/update", async (req, res, next) => {
  const id = req.body.e_id;
  const name = req.body.e_name;
  const address = req.body.e_address;
  const age = req.body.e_age;
  const department = req.body.e_department;
  const status = req.body.e_status;
  const lat = req.body.lat;
  const long = req.body.long;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error("Employee with id " + id + " not found");
    }
    employee.name = name;
    employee.address = address;
    employee.age = age;
    employee.department = department;
    employee.status = status;
    employee.lat = lat;
    employee.long = long;
    employee.save();
    res.send({ message: "Updated Successfully" });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

router.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.send(employees);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

router.get("/employees/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const employees = await Employee.findById(id);
    res.send(employees);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

module.exports = router;
