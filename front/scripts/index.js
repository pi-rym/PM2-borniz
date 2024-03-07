 class Dates{
    constructor(title,year,director,duration,genre,rate,poster){
        this.title = title;
        this.year = year
        this.director =director;
        this.duration = duration;
        this.genre = genre;
        this.rate =rate;
        this.poster=poster
        // this.img = post;
        console.log(`se crearon los datos de ${title}`)
    }
 }
 class Repository{
    constructor(){
        this.movie = [];
    }
    Createmovie({title,year,director,duration,genre,rate,poster}) {
        const newdatos = new Dates(title,year,director,duration,genre,rate,poster);
        this.movie.push(newdatos);
        console.log(`Se ha creado los datos que son ${newdatos}`);
        
    }
    getAllmovie(){
        console.log('Se actualizaron los datos de ');
       
        return this.movie;
    }

 }
 const repository = new Repository();
const mapMovie= ({title,year,director,duration,genre,rate,poster})=>{  
    console.log(`'Se esta creado las cads'${title}`);

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

const renderMovie= () =>{
    console.log(repository.getAllmovie());
}

 const eventbtnupdate = (datos) => {
    const seccionmovie = document.getElementById('showmovie');
    seccionmovie.innerHTML="";
    datos.forEach(movie=>{
    repository.Createmovie(movie);
    });
    console.log(`El director de la peli es ${datos.ditector}`);

    const mov = repository.getAllmovie();
    const allmovie = mov.map(mapMovie);

    allmovie.forEach((cards)=>seccionmovie.appendChild(cards))
    
    renderMovie();
}

const requestmovie = () =>{
    $.get('https://students-api.2.us-1.fl0.io/movies',eventbtnupdate)

}

const btnupdate = document.getElementById('btnupdate');
btnupdate.addEventListener('click',requestmovie)