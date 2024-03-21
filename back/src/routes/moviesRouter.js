const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const postMovieController = require("../controllers/postcontroller");
const validateMovie = require("../middleware/validateMovie");
const router = Router();

router.get("/", moviesController);
router.post("/", validateMovie, postMovieController);

module.exports = router;
