const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

// Root route
app.get("/", (req, res) => res.send("Hello, client!"));

module.exports = app;
