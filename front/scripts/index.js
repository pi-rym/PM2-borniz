const eventBtnUpdate = require('./handler')
const axios = require('axios')

const requestMovie = async () => {
   try {
      const {data} = await axios('http://localhost:3000/movies');
      console.log(data);
      eventBtnUpdate(data)
   } catch (error) {
      console.error('No entro')
   }
}

const btnUpdate = document.getElementById('btnupdate');
btnUpdate.addEventListener('click', requestMovie);


