const map=require('./map');
const Repository =require('./repository');
const eventbtnupdate = (datos) => {
    console.log('entramos en handler');
    const seccionmovie = document.getElementById('showmovie');
    seccionmovie.innerHTML="";
    const repo = new Repository();
    datos.forEach(movie=>{
    repo.Createmovie(movie);
    });
    console.log(`El director de la peli es ${datos.director}`);
    
    const mov = repo.getAllmovie();
    const allmovie = mov.map(mapMovie);

    allmovie.forEach((cards)=>seccionmovie.appendChild(cards))
    
    renderMovie(repo);
}
const renderMovie= () =>{
    const repo = new Repository();
    console.log(repo.getAllmovie());
}

module.exports= eventbtnupdate;