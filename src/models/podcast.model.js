const mongoose = require("mongoose");

const podcastSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },
    title: { 
        type: String, 
        required: true 
    },
    source: {
        type: String, 
        required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Podcast = mongoose.model("Podcast", podcastSchema);
module.exports = Podcast;
