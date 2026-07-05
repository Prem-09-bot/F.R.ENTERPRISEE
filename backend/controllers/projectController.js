const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  const projects = await Project.find().sort({
    createdAt: -1,
  });

  res.json(projects);
};

exports.addProject = async (req, res) => {
  try {

    const project = await Project.create({
      ...req.body,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(project);

  } catch (err) {

   console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};

exports.updateProject = async (req, res) => {
  try {

    const data = {
      ...req.body,
    };

    if (req.file) {
      data.image = req.file.path;
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      data,
      {
        returnDocument:"after",
      }
    );

    res.json(project);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted Successfully",
  });
};