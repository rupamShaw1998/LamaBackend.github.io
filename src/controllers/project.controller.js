const express = require("express");
const Project = require("../models/project.model");
const authTokenVerification = require("../middlewares/auth");

const router = express.Router();

router.post("/add-project", async (req, res) => {
  try {
    const { userId, name } = req.body;

    const project = await Project.create({ userId, name });
    return res.status(201).send(project);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/get-projects", authTokenVerification, async (req, res) => {
  try {
    const projects = await Project.find({userId: req.user}).lean().exec();
    return res.status(200).send({user: req.user,projects});
  } catch (err) {
      return res.status(500).send(err);
  }
});

module.exports = router;
