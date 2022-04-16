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
    required: false,
    trim: true,
  },

  duration: {
    type: Number,
    required: false,
    trim: true,
  },

  genre: {
    type: String,
    required: false,
    trim: true,
  },

  rating: {
    type: Number,
    required: false,
    trim: true,
  },

  image: {
    url: String,
    public_id: String,
  },
});

export default mongoose.model("Movie", movieSchema);
