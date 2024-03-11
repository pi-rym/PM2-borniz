const hanlder = require('./handler');
const axios = require('axios');






const requestmovie = async()=>{
    try {
       const conect= axios('https://students-api.2.us-1.fl0.io/movies')
       console.log(conect.data)
        hanlder(conect.data)
   } catch (error) {
    console.error("No se pudo conectar:", error.message);
   }
}

const btnupdate = document.getElementById('btnupdate');
btnupdate.addEventListener('click',requestmovie);
