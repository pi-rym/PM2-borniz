const validateMovie = (req, res, next) => {
  const { title, year, director, duraction, rate, poster } = req.body;
  if (![title, year, director, duraction, rate, poster].every(Boolean)) {
    return res.status(400).json({ message: "Faltan Datos." });
  }
  if (year.length != 4) {
    throw res.status(400).json({ message: "Year Incorrect" });
  }
  next();
};
module.exports = validateMovie;
