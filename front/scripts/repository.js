const Dates = require('./Dates');

class Repository {
    constructor() {
        this.movies = [];
        console.log('Entrando en el repositorio');
    }

    createMovie({ title, year, director, duration, genre, rate, poster }) {
        const newMovie = new Dates(title, year, director, duration, genre, rate, poster);
        this.movies.push(newMovie);
        console.log(`Se creó la película: ${newMovie.title}`);
    }

    getAllMovies() {
        console.log('Obteniendo todas las películas');
        return this.movies;
    }
}

module.exports = Repository;
