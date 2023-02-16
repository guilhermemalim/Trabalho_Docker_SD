const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");
const movieRoutes = require("./routes/movies");
const movie2Routes = require("./routes/movies2")
const evaluateRoutes = require("./routes/evaluate")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/", homeRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/movies2", movie2Routes);
app.use("/api/evaluate", evaluateRoutes);

module.exports = app;
