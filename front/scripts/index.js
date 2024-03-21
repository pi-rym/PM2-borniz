const eventBtnUpdate = require("./handler");
const axios = require("axios");
const datesMovie = require("./addDateMovies");
const renderGnere = require("./genre");
const requestMovie = async () => {
  try {
    const { data } = await axios("http://localhost:3000/movies");
    eventBtnUpdate(data);
  } catch (error) {
    console.error("No entro");
  }
};
const clear = () => {
  form = document.getElementById("addForm");
  location.reload(true);
};

document.addEventListener("DOMContentLoaded", function () {
  requestMovie();
});

document.getElementsByName;
const btnAddMovie = document.getElementById("btnAddMovie");
btnAddMovie.addEventListener("click", datesMovie);

const btnclear = document.getElementById("btnClear");
btnclear.addEventListener("click", clear);

// const linkckAddMovie = document.getElementById("linckaddmovie");
// linkckAddMovie.addEventListener("click", alert(renderGnere()));
