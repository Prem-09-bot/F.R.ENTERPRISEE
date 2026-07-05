import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";
import InquiryModal from "../components/InquiryModal";

import {
  FaEye,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await axios.get(`${API_URL}/inquiry`
      );

      setInquiries(res.data);
    } catch (err) {
      console.error("Error fetching inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
  try {
    await axios.put(
      `http://localhost:5000/api/inquiry/${id}/status`,
      { status }
    );
    setInquiries((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, status }
          : item
      )
    );
    if (selectedInquiry?._id === id) {
      setSelectedInquiry((prev) => ({
        ...prev,
        status,
      }));
    }

  } catch (err) {
    console.error(err);
  }
};

 const filteredInquiries = inquiries.filter((item) => {
  const matchesSearch =
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.phone.includes(search) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.service.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    item.status === statusFilter;

  return matchesSearch && matchesStatus;
});

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Customer Inquiries
      </h1>

      <div className="bg-white rounded-2xl shadow p-5 mb-6 flex flex-col md:flex-row gap-4">

  <input
    type="text"
    placeholder="Search by name, phone, email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="border rounded-xl px-4 py-3"
  >
    <option value="All">All Status</option>
    <option value="New">New</option>
    <option value="Contacted">Contacted</option>
    <option value="Quotation Sent">Quotation Sent</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
    <option value="Closed">Closed</option>
  </select>

</div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
         <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">

          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center p-8">
                  Loading...
                </td>
              </tr>
            ) : filteredInquiries.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-8">
                  No inquiries found.
                </td>
              </tr>
            ) : (
              filteredInquiries.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-medium">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.service}
                  </td>

                  <td className="p-4">
                    {item.phone}
                  </td>

                  <td className="p-4">
                    {item.email}
                  </td>

                  <td className="p-4">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">

                      <button
                        onClick={() => setSelectedInquiry(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                        title="View Details"
                      >
                        <FaEye />
                      </button>

                      <a
                        href={`tel:${item.phone}`}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
                        title="Call Customer"
                      >
                        <FaPhoneAlt />
                      </a>

                      <a
                        href={`https://wa.me/91${item.phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg"
                        title="WhatsApp"
                      >
                        <FaWhatsapp />
                      </a>

                      <a
                        href={`mailto:${item.email}`}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                        title="Email Customer"
                      >
                        <FaEnvelope />
                      </a>

                    </div>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
        </div>

      </div>
      {selectedInquiry && (
        <InquiryModal
    inquiry={selectedInquiry}
    onClose={() => setSelectedInquiry(null)}
    updateStatus={updateStatus}
/>
      )}

    </Layout>
  );
}