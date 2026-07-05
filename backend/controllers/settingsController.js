const Settings = require("../models/Settings");

exports.getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }

    res.json(settings);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
exports.updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create({});
    }

    const updateData = {
      ...req.body,
    };

    // Update logo if a new image is uploaded
    if (req.file) {
      updateData.logo = req.file.path;
    }

    settings = await Settings.findByIdAndUpdate(
      settings._id,
      updateData,
      {
        returnDocument: "after",
      }
    );

    res.json(settings);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};