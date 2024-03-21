const Movie = require("../models/Movies");
const deleteMovieService = async (id) => {
  try {
    const deletemovie = Movie.deleteOne(id);
  } catch (error) {}
};
