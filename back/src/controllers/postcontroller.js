const postMovieService = require("../services/postMovieService");
const postMovieController = async (req, res) => {
  try {
    await postMovieService(req.body);
    res.status(201).json({ message: "Producto Creado Exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postMovieController;
