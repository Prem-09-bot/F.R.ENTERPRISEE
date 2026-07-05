import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function DashboardCharts({ stats }) {

  const projectData = [
    {
      name: "Completed",
      value: stats.completedProjects,
    },
    {
      name: "Ongoing",
      value: stats.ongoingProjects,
    },
    {
      name: "Upcoming",
      value: stats.upcomingProjects,
    },
  ];

  const inquiryData = [
    {
      name: "New",
      value: stats.new,
    },
    {
      name: "Contacted",
      value: stats.contacted,
    },
    {
      name: "Quotation",
      value: stats.quotation,
    },
    {
      name: "Progress",
      value: stats.progress,
    },
    {
      name: "Completed",
      value: stats.completedInquiry,
    },
    {
      name: "Closed",
      value: stats.closed,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#f97316",
    "#8b5cf6",
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          Project Status
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie
              data={projectData}
              dataKey="value"
              outerRadius={110}
              label
            >

              {projectData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          Inquiry Status
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart data={inquiryData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}