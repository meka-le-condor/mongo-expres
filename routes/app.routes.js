module.exports = app => {
    const students = require("../controllers/student.controller");
    const movies = require("../controllers/movies.controller");
    let router = require("express").Router();
  
    // Create a new Student
    router.post("/", students.create);
  
    // Retrieve all Students
    router.get("/", students.findAll);
  
     app.use("/api/students", router);
    
    // Create a new movies
     router.post("/mov", movies.create);

     // update a movies
     router.put("/mov/:id", movies.update);
       // delete a movies
     router.delete("/movd/:id", movies.delete);
  
    // Retrieve all movies
    router.get("/mov", movies.findAll);
  
    app.use("/api/movies", router);
  };