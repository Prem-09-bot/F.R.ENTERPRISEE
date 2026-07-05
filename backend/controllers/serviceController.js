const Service = require("../models/Service");

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({
      createdAt: -1,
    });

    res.json(services);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.addService = async (req, res) => {
  try {
    const service = await Service.create({
      ...req.body,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateService = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    if (req.file) {
      data.image = req.file.path;
    }

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      data,
      {
        returnDocument: "after",
      }
    );

    res.json(service);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};