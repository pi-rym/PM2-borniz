const Dates = require("./Dates");

class Repository {
  constructor() {
    this.movies = [];
  }

  createMovie({ title, year, director, duraction, genre, rate, poster }) {
    const newMovie = new Dates(
      title,
      year,
      director,
      duraction,
      genre,
      rate,
      poster
    );
    this.movies.push(newMovie);
  }

  getAllMovies() {
    return this.movies;
  }
}

module.exports = Repository;
