const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    projectType: {
      type: String,
    },

    location: {
      type: String,
    },

    message: {
      type: String,
    },
status: {
  type: String,
  enum: [
    "New",
    "Contacted",
    "Quotation Sent",
    "In Progress",
    "Completed",
    "Closed",
  ],
  default: "New",
},
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inquiry", inquirySchema);