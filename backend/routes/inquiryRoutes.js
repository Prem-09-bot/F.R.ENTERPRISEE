const express = require("express");

const router = express.Router();

const {
  sendInquiry,
  getInquiries,
  updateStatus,
} = require("../controllers/inquiryController");

router.post("/", sendInquiry);

router.get("/", getInquiries);

router.put("/:id/status", updateStatus);

module.exports = router;