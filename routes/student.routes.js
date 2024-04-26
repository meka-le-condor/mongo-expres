module.exports = app => {
    const students = require("../controllers/student.controller");
    let router = require("express").Router();
  
    // Create a new Student
    router.post("/", students.create);
  
    // Retrieve all Students
    router.get("/", students.findAll);
  
    app.use("/api/students", router);
  };