const Movie = require("../models/Movies");
const postMovieService = async (movie) => {
  console.log(`estamos en back ${movie}`);
  try {
    const newMovie = await Movie.create(movie);

    return newMovie;
  } catch (error) {
    throw Error(`error en el proceso de crear producto ${movie}`);
  }
};

module.exports = postMovieService;
