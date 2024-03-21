const axios = require("axios");
const Repository = require("./repository");
const validateCheckbox = require("./genre");

const genre = ["Action", "Aventure", "comedy", "Sci - fi", "Romance"];
const opcions = document.getElementById("opcions");

const datesMovie = () => {
  event.preventDefault();
  const title = document.getElementsByName("txttitle")[0].value;
  const year = document.getElementsByName("txtyear")[0].value;
  const director = document.getElementsByName("txtDirec")[0].value;
  const duraction = document.getElementsByName("txtDurac")[0].value;
  // const genre = document.getElementsByName("txtGenre")[0].value;
  const rate = document.getElementsByName("txtRate")[0].value;
  const poster = document.getElementsByName("txtPoster")[0].value;
  const genre = validateCheckbox();
  if (!title || !year || !director || !duraction || !genre || !rate || !poster)
    throw new alert("Faltan datos");
  else {
    alert(`los datos se agregaron correctamente ${title}`);
    let container = document.getElementById("contarinerAddMovie");
    container.style.display = "block";
    container.style.textAlign = "center";
    console.log(`${poster}`);
    container.innerHTML = `
    <h2><strong>Se Agrego la pelicula</strong> </h2>
    <h3 class="pagiletas"><strong>Título: ${title} (${year})</strong></h3>
    <img src="${poster}" class="imagencards" alt="imagen"></img>
      `;
    const repo = new Repository();
    const date = { title, year, director, duraction, genre, rate, poster };
    const jstringfiel = JSON.stringify(date);
    const jdatesMovie = JSON.parse(jstringfiel);
    console.log(jstringfiel);
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json ",
      },
      body: jstringfiel,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
};

module.exports = datesMovie;
