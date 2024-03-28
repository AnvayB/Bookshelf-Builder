import express from "express";
import { PORT, mongoDBURL, serpAPI_key } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoutes from './routes/booksRoutes.js'
import cors from "cors"
import axios from "axios";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS
app.use(cors({
  origin: 'http://localhost:3000',
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // allowedHeaders: ["Content-Type"]
}))

app.get('/', (req, res) => {
  console.log(res);
  return res.status(234).send("Welcome to MERN Stack tutorial");
});

app.get("/images", (req, res) => {
  let {query} = req.query;
  axios.get(`https://serpapi.com/search?engine=google_images&q=${query}&api_key=${serpAPI_key}`)
      .then(function (response) {
          res.send(response.data);
      })
      .catch(function (error) {
          res.send(error.response.data);
      });
});

app.use('/books', booksRoutes)

// Mongoose Server Running
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database!");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
