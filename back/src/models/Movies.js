const { Schema, model } = require("mongoose");

const Movies = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duraction: {
    type: String,
    required: true,
  },
  genre: {
    type: Array,
  },
  rate: {
    type: Number,
  },
  poster: {
    type: String,
    required: true,
  },
});
const Movie = model("Movie", Movies);
module.exports = Movie;
