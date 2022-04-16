import Post from "../models/Post.js";
import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
};

export const addMovie = (req, res) => {
  const { title, description, year, duration, genre, rating, image } = req.body;
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
  return res.send(newMovie);
};

export const updateMovie = (req, res) => res.send("Movie updated");

export const deleteMovie = (req, res) => res.send("Movie deleted");

export const getMovie = (req, res) => res.send("Movie detail");
