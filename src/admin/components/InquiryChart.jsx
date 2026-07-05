import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function InquiryChart({ stats }) {
  const data = [
    { name: "New", value: stats.new || 0 },
    { name: "Contacted", value: stats.contacted || 0 },
    { name: "Quotation", value: stats.quotation || 0 },
    { name: "Progress", value: stats.progress || 0 },
    { name: "Completed", value: stats.completed || 0 },
    { name: "Closed", value: stats.closed || 0 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Inquiry Status Overview
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}