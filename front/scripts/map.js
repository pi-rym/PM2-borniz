const mapMovie = ({ title, year, director, duration, genre, rate, poster }) => {
    console.log(`Creando la tarjeta en el mapa: ${title}`);

    const divMovie = document.createElement('div');
    const divDate = document.createElement('div');

    divMovie.classList.add('containercards');
    divMovie.innerHTML = `
        <h3 class="pagiletas"><strong>Título: ${title} (${year})</strong></h3>
        <img src="${poster}" class="imagencards" alt="imagen"></img>
    `;
    console.log(`estamos en map y se esta creadon el contenedor de la pelicula ${title}`);
    divDate.innerHTML = `
        <p><strong>Director: ${director}</strong></p>
        <p><strong>Duración: ${duration}</strong></p>
        <p><strong>Género: ${genre.join(", ")}</strong></p>
        <p><strong>Calificación: ${rate}</strong></p>
    `;

    divMovie.style.border = "solid 1px #3A3335";
    divMovie.style.width = "250px";
    divMovie.style.margin = "15px";
    divMovie.style.paddingLeft = "1em";

    divMovie.appendChild(divDate);

    return divMovie;
}

module.exports = mapMovie;
