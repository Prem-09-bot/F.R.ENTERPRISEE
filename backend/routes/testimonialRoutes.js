const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");
const verifyToken = require("../middleware/verifyToken");

const {
  getTestimonials,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

router.get("/", getTestimonials);

router.post(
  "/",verifyToken,
  upload.single("image"),
  addTestimonial
);

router.put(
  "/:id",verifyToken,
  upload.single("image"),
  updateTestimonial
);

router.delete("/:id",verifyToken, deleteTestimonial);

module.exports = router;