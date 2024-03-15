const { Router } = require('express');
const usersController = require('../controllers/usersControler')

const router = Router()

router.get('/',usersController);

module.exports = router;