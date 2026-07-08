const Inquiry = require("../models/Inquiry");
const Brevo = require("@getbrevo/brevo");

const apiInstance = new Brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

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

    // Save to MongoDB
    const inquiry = await Inquiry.create({
      name,
      phone,
      email,
      service,
      projectType,
      location,
      message,
    });

    // Respond immediately
    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully!",
      inquiry,
    });

    const emailData = new Brevo.SendSmtpEmail();

    emailData.sender = {
      name: "F.R. Enterprise",
      email: "frenterprise.co@gmail.com",
    };

    emailData.to = [
      {
        email: "frenterprise.co@gmail.com",
        name: "F.R. Enterprise",
      },
    ];

    emailData.subject = "📩 New Inquiry - F.R. Enterprise";

    emailData.htmlContent = `
      <div style="font-family:Arial;padding:20px">
        <h2 style="color:#0F4C81">
          New Website Inquiry
        </h2>

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
          Submitted from FR Enterprise Website
        </small>
      </div>
    `;

    apiInstance
      .sendTransacEmail(emailData)
      .then(() => {
        console.log("✅ Email sent successfully");
      })
      .catch((err) => {
        console.error("❌ Email Error:", err);
      });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    res.json(inquiries);
  } catch (err) {
    res.status(500).json({
      message: err.message,
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