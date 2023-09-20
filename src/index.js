const express = require('express');
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
