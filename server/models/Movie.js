import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  year: {
    type: Number,
    required: true,
    trim: true,
  },

  duration: {
    type: Number,
    required: true,
    trim: true,
  },

  genre: {
    type: String,
    required: true,
    trim: true,
  },

  rating: {
    type: Number,
    required: true,
    trim: true,
  },

  image: {
    url: String,
    public_id: String,
  },
});

export default mongoose.model("Movie", movieSchema);
