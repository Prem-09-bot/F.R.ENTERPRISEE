const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    company: String,

    designation: String,

    review: {
      type: String,
      required: true,
    },

    image: String,

    rating: {
      type: Number,
      default: 5,
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

module.exports = mongoose.model(
  "Testimonial",
  testimonialSchema
);