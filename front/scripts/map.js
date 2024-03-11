const mapMovie= ({title,year,director,duration,genre,rate,poster})=>{  
    console.log(`'Se esta creado las cads en map'${title}`);

    const divMovie = document.createElement('div');
    const divdate=document.createElement('div');
    divMovie.classList.add('containercards');
    divMovie.innerHTML=
    `<h3 class="pagiletas"><strong> Titulo ;${title} (${year}) </strong></h3>
    <img src=${poster} class="imagencards" alt="imagen"></img>`
    divdate.innerHTML=`
    <p><strong>Director ;${director}</strong></p>
    <p><strong>Duracion ;${duration}</strong></p>
    <p><strong>Genero ;${genre.join(", ")}</strong></p>
    <p><strong>Calificaion ;${rate}</strong></p>
    `
    console.log(`${director}`);
    divMovie.style.border = "solid 1px #3A3335";
    divMovie.style.width = "2500px";
    divMovie.style.margin = "15px";
    divMovie.style.paddingLeft = "1em";
    divMovie.appendChild(divdate);
    

    return divMovie;

}
module.exports=mapMovie;