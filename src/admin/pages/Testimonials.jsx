import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from "../../config";

import Layout from "../components/Layout";
import TestimonialModal from "../components/TestimonialModal";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${API_URL}/testimonials`);
      setTestimonials(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const saveTestimonial = async (testimonialData) => {
    try {
      if (selectedTestimonial) {
        await axios.put(
          `${API_URL}/testimonials/${selectedTestimonial._id}`,
          testimonialData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Testimonial Updated Successfully");

      } else {

        await axios.post(
          `${API_URL}/testimonials`,
          testimonialData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Testimonial Added Successfully");
      }

      fetchTestimonials();

      setOpen(false);
      setSelectedTestimonial(null);

    } catch (err) {

     console.error(err);

      alert("Something went wrong");
    }
  };

  const deleteTestimonial = async (id) => {

    if (!window.confirm("Delete this testimonial?"))
      return;

    try {

      await axios.delete(
        `${API_URL}/testimonials/${id}`
      );

      alert("Deleted Successfully");

      fetchTestimonials();

    } catch (err) {

      console.error(err);

      alert("Delete Failed");

    }
  };

  return (
    <Layout>

      <div className="flex justify-between items-center mb-8">

        <input
          type="text"
          placeholder="Search Testimonial..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-xl px-4 py-3 w-80"
        />

        <h1 className="text-4xl font-bold">
          Testimonials
        </h1>

        <button
          onClick={() => {
            setSelectedTestimonial(null);
            setOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          + Add Testimonial
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">

            <tr>

              <th className="p-4">Photo</th>

              <th className="p-4">Name</th>

              <th className="p-4">Company</th>

              <th className="p-4">Rating</th>

              <th className="p-4">Featured</th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {testimonials
              .filter((item) =>
                item.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((item) => (

                <tr
                  key={item._id}
                  className="border-b"
                >

                  <td className="p-4">

                    {item.image ? (

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />

                    ) : (

                      <div className="w-14 h-14 rounded-full bg-gray-200" />

                    )}

                  </td>

                  <td className="p-4 font-semibold">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.company}
                  </td>

                  <td className="p-4">
                    ⭐ {item.rating}
                  </td>

                  <td className="p-4">
                    {item.featured ? "Yes ⭐" : "No"}
                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <button
                        onClick={() => {
                          setSelectedTestimonial(item);
                          setOpen(true);
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          deleteTestimonial(item._id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
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

      <TestimonialModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedTestimonial(null);
        }}
        onSave={saveTestimonial}
        testimonial={selectedTestimonial}
      />

    </Layout>
  );
}