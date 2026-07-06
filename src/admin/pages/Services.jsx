import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import Layout from "../components/Layout";
import ServiceModal from "../components/ServiceModal";
import { API_URL } from "../../config";

export default function Services() {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${API_URL}/services`);
      setServices(res.data);

    } catch (err) {
     console.error(err);
    }
  };

  const saveService = async (serviceData) => {
    try {

      if (selectedService) {

        await axios.put(
          `${API_URL}/services/${selectedService._id}`,
          serviceData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Service Updated");

      } else {

        await axios.post(
  `${API_URL}/services`,
          serviceData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Service Added");
      }

      fetchServices();

      setOpen(false);

      setSelectedService(null);

    } catch (err) {

     console.error(err);

      alert("Something went wrong");
    }
  };

  const deleteService = async (id) => {

    if (!window.confirm("Delete this service?")) return;

    try {

      await axios.delete(
  `${API_URL}/services/${id}`
);

      fetchServices();

    } catch (err) {

      console.error(err);
    }
  };

  return (
    <Layout>

      <div className="flex justify-between items-center mb-8">

        <input
          type="text"
          placeholder="Search Service..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-xl px-4 py-3 w-80"
        />

        <h1 className="text-4xl font-bold">
          Services
        </h1>

        <button
          onClick={() => {
            setSelectedService(null);
            setOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          + Add Service
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">

            <tr>

              <th className="p-4">Title</th>

              <th className="p-4">Description</th>

              <th className="p-4">Featured</th>

              <th className="p-4">Image</th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {services
              .filter((service) =>
                service.title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((service) => (

                <tr
                  key={service._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {service.title}
                  </td>

                  <td className="p-4 text-gray-600">
  {service.description?.slice(0, 60)}...
</td>

                  <td className="p-4">
                    {service.featured
                      ? "⭐ Yes"
                      : "No"}
                  </td>

                  <td className="p-4">

                    {service.image ? (

                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />

                    ) : (

                      "No Image"

                    )}

                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <button
                        onClick={() => {
                          setSelectedService(service);
                          setOpen(true);
                        }}
                        className="bg-yellow-500 text-white p-2 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          deleteService(service._id)
                        }
                        className="bg-red-600 text-white p-2 rounded-lg"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

      <ServiceModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedService(null);
        }}
        onSave={saveService}
        service={selectedService}
      />

    </Layout>
  );
}