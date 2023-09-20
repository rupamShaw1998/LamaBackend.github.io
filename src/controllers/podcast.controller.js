const express = require("express");
const Podcast = require("../models/podcast.model");
const authTokenVerification = require("../middleware/auth");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { userId, projectId, text } = req.body;

    const podcast = await Podcast.create({ userId, projectId, text });
    return res.status(201).send(podcast);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/get-podcasts/:id", authTokenVerification, async (req, res) => {
  try {
    const podcasts = await Podcast.find({projectId: req.params.id}).lean().exec();
    return res.status(200).send(podcasts);
  } catch (err) {
      return res.status(500).send(err);
  }
});

router.delete("/remove-podcast/:id", async (req, res) => {
    try {
        const podcast = await Podcast.findByIdAndDelete(id);
        return res.status(202).send(podcast);
    } catch (err) {
        return res.status(500).send(err);
    }
});

module.exports = router;
