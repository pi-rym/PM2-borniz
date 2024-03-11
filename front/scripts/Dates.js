const rep = require('./repository');
class Dates{
    constructor(title,year,director,duration,genre,rate,poster){
        console.log('estamos en Dates');
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
 module.exports=Dates;