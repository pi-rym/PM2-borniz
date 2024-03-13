const {Router} = require('express')
const moviesController = require('../controllers/moviesControllers')
const moviesRoute = Router()

moviesRoute.get('/',moviesController)

module.exports = moviesRoute