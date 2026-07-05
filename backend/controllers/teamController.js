const Team = require("../models/Team");

exports.getTeam = async (req, res) => {
  try {
    const members = await Team.find().sort({
      createdAt: -1,
    });

    res.json(members);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.addMember = async (req, res) => {
  try {
    const member = await Team.create({
      ...req.body,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    if (req.file) {
      data.image = req.file.path;
    }

    const member = await Team.findByIdAndUpdate(
      req.params.id,
      data,
      {
        returnDocument: "after",
      }
    );

    res.json(member);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};