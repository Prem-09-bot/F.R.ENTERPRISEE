const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    experience: {
      type: Number,
      default: 0,
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);