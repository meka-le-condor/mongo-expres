const { Int32 } = require("mongodb");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: String,
        title: String,
        release: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const movies = mongoose.model("movies", schema);
    return movies;
  };
  