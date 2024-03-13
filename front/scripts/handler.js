const mapMovie = require('./map');
const Repository = require('./repository');

const eventBtnUpdate = (data) => {
    console.log(`los datos que entran en handler son ${data}`);
    console.log('Entro en el manejador');
    const sectionMovie = document.getElementById('showmovie');
    sectionMovie.innerHTML = "";

    const repo = new Repository();

    data.forEach(movie => {
        repo.createMovie(movie);
    });

    console.log(`El director de la película es ${data.title}`);

    const movies = repo.getAllMovies();
    const allMovies = movies.map(mapMovie);

    allMovies.forEach(cards => sectionMovie.appendChild(cards));

    renderMovie(repo);
}

const renderMovie = (repo) => {
    console.log(repo.getAllMovies());
}

module.exports = eventBtnUpdate;
