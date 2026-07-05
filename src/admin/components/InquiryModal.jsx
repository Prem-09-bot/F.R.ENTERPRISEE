 import {
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaTools,
  FaBuilding,
  FaUser,
} from "react-icons/fa";

import StatusBadge from "./StatusBadge";

export default function InquiryModal({ inquiry, onClose, updateStatus, }) {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">

      <div className="bg-white w-full lg:max-w-xl h-full overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">

          <h2 className="text-2xl font-bold">
            Inquiry Details
          </h2>

          <button
            onClick={onClose}
            className="text-xl hover:text-red-500 transition"
          >
            <FaTimes />
          </button>

        </div>

        <div className="p-6">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
              <FaUser />
            </div>

            <div>


              <h2 className="text-2xl font-bold">
                {inquiry.name}
              </h2>

              <div className="mt-2">
               <StatusBadge status={inquiry.status || "New"} />
              </div>

            </div>

          </div>

          <div className="space-y-5">

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaPhoneAlt />
                Phone
              </p>

              <p className="font-semibold mt-2">
                {inquiry.phone}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaEnvelope />
                Email
              </p>

              <p className="font-semibold mt-2 break-all">
                {inquiry.email}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaTools />
                Service
              </p>

              <p className="font-semibold mt-2">
                {inquiry.service}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaBuilding />
                Project Type
              </p>

              <p className="font-semibold mt-2">
                {inquiry.projectType}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <FaMapMarkerAlt />
                Location
              </p>

              <p className="font-semibold mt-2">
                {inquiry.location}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Project Requirements
              </p>

              <p className="mt-3 whitespace-pre-line">
                {inquiry.message}
              </p>
            </div>

          </div>

<div className="mt-8">

  <label className="font-semibold block mb-2">
    Inquiry Status
  </label>

<select
  value={inquiry.status || "New"}
  onChange={(e) => {
    updateStatus(inquiry._id, e.target.value);
  }}
  className="
    w-full
    border
    rounded-xl
    p-3
    focus:ring-2
    focus:ring-blue-500
    outline-none
  "
>
    <option value="New">New</option>

    <option value="Contacted">
      Contacted
    </option>

    <option value="Quotation Sent">
      Quotation Sent
    </option>

    <option value="In Progress">
      In Progress
    </option>

    <option value="Completed">
      Completed
    </option>

    <option value="Closed">
      Closed
    </option>

  </select>

</div>
          {/* Quick Actions */}

          <div className="grid grid-cols-3 gap-3 mt-8">

            <a
              href={`tel:${inquiry.phone}`}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-center transition"
            >
              <FaPhoneAlt className="mx-auto mb-2" />
              Call
            </a>

            <a
              href={`https://wa.me/91${inquiry.phone}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 text-center transition"
            >
              <FaWhatsapp className="mx-auto mb-2" />
              WhatsApp
            </a>

            <a
              href={`mailto:${inquiry.email}`}
              className="bg-red-500 hover:bg-red-600 text-white rounded-xl py-4 text-center transition"
            >
              <FaEnvelope className="mx-auto mb-2" />
              Email
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}