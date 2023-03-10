const express = require("express");
const validateId = require("../middleware/validateId");
const Movie2 = require("../models/movie2");

const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Movie2.find().sort("title");
  res.send(movies);
});

router.get("/:id", validateId, async (req, res) => {
  const movie = await Movie2.findById(req.params.id);
  if (!movie) return res.status(404).send();
  res.send(movie);
});

router.post("/", async (req, res) => {
  if (!req.body.title) return res.status(400).send("Title is required.");

  const movie = new Movie2({ title: req.body.title });
  await movie.save();
  res.status(201).send(movie);
});

router.delete("/:id", async (req, res) => {
  const movie = await Movie2.findByIdAndDelete(req.params.id);

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.status(204).send();
});

module.exports = router;
