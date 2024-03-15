const axios = require('axios');
const {Movies} = require("../types/class")

 module.exports = { getAllMovies : async () => {
    try {
       const {data} = await axios('https://students-api.up.railway.app/movies');
       const movies = data.map((movie)=>new Movies(movie))
       return data;
    } catch (error) {
       throw new Error(error);
    }
 }}