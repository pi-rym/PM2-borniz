const Movie = require("../models/Movies");
const moviesValidation = require("../utils/validations/moviesValidations");
const { Movies } = require("../types/class");

module.exports = {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find();
      console.log(movies);
      const moviesCollection = movies.map((movie) => {
        if (moviesValidation(movie)) {
          return new Movies(movie);
        }
      });
      return moviesCollection;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
