const date = require('../services/moviesService')
const moviesController = async(req,res) =>{
    try {
        const respons = await date.getAllMovies();
    res.status(200).json(respons);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = moviesController;