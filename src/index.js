const express = require("express");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const projectController = require("./controllers/project.controller");
const podcastController = require("./controllers/podcast.controller");

require("dotenv").config();
require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userController);
app.use("/", projectController);
app.use("/", podcastController);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
