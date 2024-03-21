const mapMovie = ({
  title,
  year,
  director,
  duraction,
  genre,
  rate,
  poster,
}) => {
  const divMovie = document.createElement("div");
  const divDate = document.createElement("div");

  divMovie.classList.add("containercards");
  divMovie.innerHTML = `
        <h3 class="pagiletas"><strong>Título: ${title} (${year})</strong></h3>
        <img src="${poster}" class="imagencards" alt="imagen"></img>
    `;
  divDate.innerHTML = `
        <p><strong class="pagiletas">Director: ${director}</strong></p>
        <p><strong class="pagiletas">Duración: ${duraction}</strong></p>
        <p><strong class="pagiletas">Género: ${genre.join(", ")}</strong></p>
        <p><strong class="pagiletas">Calificación: ${rate}</strong></p>
    `;

  divMovie.style.border = "solid 1px #3A3335";
  divMovie.style.width = "250px";
  divMovie.style.margin = "15px";
  divMovie.style.paddingLeft = "1em";
  //   divDate.style.border = "solid 1px #3A3335";
  divMovie.appendChild(divDate);

  return divMovie;
};

module.exports = mapMovie;
