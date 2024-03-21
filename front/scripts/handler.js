const mapMovie = require("./map");
const Repository = require("./repository");

const eventBtnUpdate = (data) => {
  const sectionMovie = document.getElementById("showmovie");
  sectionMovie.innerHTML = "";

  const repo = new Repository();

  data.forEach((movie) => {
    repo.createMovie(movie);
  });

  const movies = repo.getAllMovies();
  const allMovies = movies.map(mapMovie);

  allMovies.forEach((cards) => sectionMovie.appendChild(cards));

  renderMovie(repo);
};

const renderMovie = (repo) => {
  repo.getAllMovies();
};

module.exports = eventBtnUpdate;
