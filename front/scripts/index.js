 class Dates{
    constructor(title,year,director,duration,genre,rate,poster){
        this.title = title;
        this.year = year
        this.ditector =director;
        this.duration = duration;
        this.genero = genre;
        this.clasification =rate;
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
    divMovie.innerHTML=
    `<h3><strong> Titulo ;${title} (${year})</strong></h3>
    <img src=${poster} class="img" alt="imagen"></img>
    <p><strong>Director ;${director}</strong></p>
    <p><strong>Duracion ;${duration}</strong></p>
    <p><strong>Genero ;${genre}</strong></p>
    <p><strong>Calificaion ;${rate}</strong></p>
    `
    divMovie.style.border = "solid 1px #3A3335";
    divMovie.style.width = "250px";
    divMovie.style.margin = "15px";
    divMovie.style.paddingLeft = "1em";
    

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
    console.log(datos);

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