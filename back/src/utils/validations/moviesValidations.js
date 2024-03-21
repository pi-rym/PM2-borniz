function moviesValidation(movieObject) {
  if (!movieObject.title || !movieObject.year || !movieObject.director) {
    throw new Error("MISSING REQUIRED FIELDS");
  }
  return true;
}
module.exports = moviesValidation;
