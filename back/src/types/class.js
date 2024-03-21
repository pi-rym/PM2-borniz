class Movies {
  constructor({ id, title, year, director, duraction, genre, rate, poster }) {
    if (!title || !year || !director) {
      throw new Error("Missing required fields");
    }
    this.id = id;
    this.title = title;
    this.year = year;
    this.director = director;
    this.duraction = duraction;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}
module.exports = { Movies };
