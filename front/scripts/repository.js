const Dates = require('./Dates')
class Repository{
    constructor(){
        this.movie = [];
        console.log('entramos en repository');
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
 module.exports=Repository;