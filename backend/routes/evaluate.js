const express = require("express");
const Movie = require("../models/movie");
const Movie2 = require("../models/movie2");

const router = express.Router();

router.get("/:title", async (req, res) => {
  const {title} = req.params;

  console.log(title);
  
  const movie = await Movie.findOne({title: title});
  const movie2 = await Movie2.findOne({title: title});


  if (movie && movie2)
    res.send(movie);

  return res.status(404).send();
});

module.exports = router;
