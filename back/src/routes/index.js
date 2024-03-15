const { Router } = require('express')
const bienvenida = require('../controllers/index')
const usersRouts = require('./usersRouts')
const moviesRouter = require('./moviesRouter')
const router = Router();

router.get('/',bienvenida)

router.use('/Users',usersRouts)
router.use('/movies',moviesRouter)
module.exports = router;