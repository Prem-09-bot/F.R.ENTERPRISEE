const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      default: "F.R Enterprise",
    },

    logo: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    whatsapp: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    map: {
      type: String,
      default: "",
    },

    footerText: {
      type: String,
      default: "© F.R Enterprise",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);