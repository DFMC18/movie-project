import Post from "../models/Post.js";
import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addMovie = async (req, res) => {
  try {
    const { title, description, year, duration, genre, rating, image } =
      req.body;
    const newMovie = new Movie({
      title,
      description,
      year,
      duration,
      genre,
      rating,
      image,
    });
    console.log(newMovie);
    await newMovie.save();
    return res.json(newMovie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(movie);
    return res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteMovie = async (req, res) => {
  try {
    const movieDeleted = await Movie.findByIdAndDelete(req.params.id);

    if (!movieDeleted) return res.status(404).send({ msg: "Movie not found" });

    return res.status(200).send({ msg: "Succefully deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send({ msg: "Movie not found" });
    return res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
