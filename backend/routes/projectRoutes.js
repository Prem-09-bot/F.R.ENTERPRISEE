const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");
const verifyToken = require("../middleware/verifyToken");


const {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.get("/", getProjects);

router.post("/", verifyToken, upload.single("image"), addProject);
router.put("/:id", verifyToken, upload.single("image"), updateProject);

router.delete("/:id", verifyToken, deleteProject);


module.exports = router;