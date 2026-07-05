const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");
const verifyToken = require("../middleware/verifyToken");

const {
  getTeam,
  addMember,
  updateMember,
  deleteMember,
} = require("../controllers/teamController");

router.get("/", getTeam);

router.post(
  "/", verifyToken,
  upload.single("image"),
  addMember
);

router.put(
  "/:id", verifyToken,
  upload.single("image"),
  updateMember
);

router.delete("/:id",verifyToken, deleteMember);

module.exports = router;