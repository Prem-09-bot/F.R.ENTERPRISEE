const Inquiry = require("../models/Inquiry");
const Project = require("../models/Project");

const getDashboard = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    const projects = await Project.find();

    const latestProjects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const dashboard = {
      totalInquiries: inquiries.length,
      new: inquiries.filter(i => i.status === "New").length,
      contacted: inquiries.filter(i => i.status === "Contacted").length,
      quotation: inquiries.filter(i => i.status === "Quotation Sent").length,
      progress: inquiries.filter(i => i.status === "In Progress").length,
      completedInquiry: inquiries.filter(i => i.status === "Completed").length,
      closed: inquiries.filter(i => i.status === "Closed").length,
      
      totalProjects: projects.length,
      completedProjects: projects.filter(
        p => p.status === "Completed"
      ).length,
      ongoingProjects: projects.filter(
        p => p.status === "Ongoing"
      ).length,
      upcomingProjects: projects.filter(
        p => p.status === "Upcoming"
      ).length,
      featuredProjects: projects.filter(
        p => p.featured
      ).length,

      latestProjects,
    };

    res.json(dashboard);

  } catch (err) {

   console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};

module.exports = {
  getDashboard,
};