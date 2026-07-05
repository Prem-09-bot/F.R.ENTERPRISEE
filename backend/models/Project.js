const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    client: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Completed", "Ongoing", "Upcoming"],
      default: "Completed",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);