const Inquiry = require("../models/Inquiry");
const nodemailer = require("nodemailer");

const sendInquiry = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      service,
      projectType,
      location,
      message,
    } = req.body;
    const inquiry = await Inquiry.create({
      name,
      phone,
      email,
      service,
      projectType,
      location,
      message,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "📩 New Inquiry - F.R. Enterprise",

      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">
        <h2 style="color:#0f4c81;">New Website Inquiry</h2>
        <hr>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Location:</strong> ${location}</p>

        <h3>Project Details</h3>

        <p>${message}</p>

        <hr>

        <small>
        This inquiry was submitted through the
        F.R. Enterprise website.
        </small>
      </div>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully!",
      inquiry,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

  const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    res.json(inquiries);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        message: "Inquiry not found",
      });
    }

    inquiry.status = req.body.status;

    await inquiry.save();

    res.json(inquiry);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  sendInquiry,
  getInquiries,
  updateStatus,
};

