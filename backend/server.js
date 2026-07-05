require("dotenv").config();

const inquiryRoutes = require("./routes/inquiryRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const projectRoutes = require("./routes/projectRoutes");
const teamRoutes = require("./routes/teamRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/inquiry", inquiryRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/team", teamRoutes);

app.use("/api/services", serviceRoutes);

app.use("/api/testimonials", testimonialRoutes);

app.use("/api/settings", settingsRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});