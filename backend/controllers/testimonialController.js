const Testimonial = require("../models/Testimonial");

exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({
      createdAt: -1,
    });

    res.json(testimonials);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.addTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create({
      ...req.body,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(testimonial);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    if (req.file) {
      data.image = req.file.path;
    }

    const testimonial =
      await Testimonial.findByIdAndUpdate(
        req.params.id,
        data,
        {
          returnDocument: "after",
        }
      );

    res.json(testimonial);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};