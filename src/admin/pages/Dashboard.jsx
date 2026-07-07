import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";

import {
  FaEnvelope,
  FaProjectDiagram,
  FaStar,
  FaCheckCircle,
  FaSpinner,
  FaClock,
} from "react-icons/fa";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(`${API_URL}/dashboard`);

      setStats(res.data);

    } catch (err) {
     console.error(err);
    }
  };

  if (!stats) {
    return (
      <Layout>
        <h1 className="text-4xl font-bold">
          Loading Dashboard...
        </h1>
      </Layout>
    );
  }

  return (
    <Layout>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        <DashboardCard
          title="Total Inquiries"
          value={stats.totalInquiries}
          icon={<FaEnvelope size={28} />}
          color="bg-blue-800"
        />

        <DashboardCard
          title="Projects"
          value={stats.totalProjects}
          icon={<FaProjectDiagram size={28} />}
          color="bg-green-600"
        />

        <DashboardCard
          title="Featured Projects"
          value={stats.featuredProjects}
          icon={<FaStar size={28} />}
          color="bg-yellow-500"
        />

        <DashboardCard
          title="Completed"
          value={stats.completedProjects}
          icon={<FaCheckCircle size={28} />}
          color="bg-emerald-600"
        />

        <DashboardCard
          title="Ongoing"
          value={stats.ongoingProjects}
          icon={<FaSpinner size={28} />}
          color="bg-orange-500"
        />

        <DashboardCard
          title="Upcoming"
          value={stats.upcomingProjects}
          icon={<FaClock size={28} />}
          color="bg-purple-600"
        />

      </div>

      <DashboardCharts stats={stats} />

      <div className="bg-white rounded-2xl shadow-lg mt-10 p-6">

        <h2 className="text-2xl font-bold mb-6">
          Latest Projects
        </h2>

        {stats.latestProjects.length === 0 ? (

          <p className="text-gray-500">
            No projects found.
          </p>

        ) : (

          <div className="space-y-4">

            {stats.latestProjects.map((project) => (

              <div
                key={project._id}
                className="flex items-center justify-between border rounded-xl p-4"
              >

                <div>

                  <h3 className="font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-500">
                    {project.category}
                  </p>

                </div>

                <span className="font-semibold text-blue-600">
                  {project.status}
                </span>

              </div>

            ))}

          </div>

        )}

      </div>

    </Layout>
  );
}