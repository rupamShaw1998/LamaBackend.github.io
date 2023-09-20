const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: { 
        type: String, 
        required: true 
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
