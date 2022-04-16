import express from "express";
import postRoutes from "./routes/posts.routes.js";
import movieRoutes from "./routes/movies.routes.js";

const app = express();

//Midelware
app.use(express.json());

// Routes
app.use(postRoutes);
app.use(movieRoutes);
 
export default app;
