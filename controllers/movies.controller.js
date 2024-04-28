const db = require("../models");
const movies = db.movies;

exports.create = function (req, res) {
// Validate request
        if (!req.body ) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
        }
        // Create a movies
        const movies = new movies({
        title: req.body.title,
        id: req.body.id,
        release: req.body.release,
    
        });
// Save movies in the database
    movies 
    .save(movies)
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while creating the movies.",
    });
    });
};

// Retrieve all moviess from the database.
exports.findAll = (req, res) => {
const id = req.query.id;
let condition = id
  ? { id: { $regex: new RegExp(id), $options: "i" } }
  : {};
movies.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving moviess.",
    });
  });
};

//update movie
exports.update = (req,res) => {

 const idm = parseInt(req.params.id);
    let mov = data.find(m=>m.id === idm);
    (mov.title=req.body.title),(mov.release=req.body.release),(mov.id=req.body.id);
    res.json(mov);

};

//delte movies
exports.delete = (req,res) => {

    const idm = parseInt(req.params.id);
    const mov = data.find(m=>m.id === idm);
    data.splice(data.indexOf(mov),1);
    res.json(data);

};
   