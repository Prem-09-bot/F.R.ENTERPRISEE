import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function TestimonialModal({
  open,
  onClose,
  onSave,
  testimonial,
}) {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    company: "",
    message: "",
    rating: 5,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (testimonial) {
      setForm({
        name: testimonial.name || "",
        designation: testimonial.designation || "",
        company: testimonial.company || "",
        message: testimonial.message || "",
        rating: testimonial.rating || 5,
      });

      setPreview(testimonial.image || "");
    } else {
      setForm({
        name: "",
        designation: "",
        company: "",
        message: "",
        rating: 5,
      });

      setImage(null);
      setPreview("");
    }
  }, [testimonial, open]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = new FormData();

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    if (image) {
      data.append("image", image);
    }

    try {
      await onSave(data);
      onClose();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-5">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">
            {testimonial ? "Edit Testimonial" : "Add Testimonial"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={22} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Client Feedback"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3"
          />

          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
            <option value={4}>⭐⭐⭐⭐ (4)</option>
            <option value={3}>⭐⭐⭐ (3)</option>
            <option value={2}>⭐⭐ (2)</option>
            <option value={1}>⭐ (1)</option>
          </select>

          <div>
            <label className="block mb-2 font-semibold">
              Client Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-xl border"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl disabled:bg-gray-400"
          >
            {loading
              ? "Saving..."
              : testimonial
              ? "Update Testimonial"
              : "Add Testimonial"}
          </button>

        </form>

      </div>
    </div>
  );
}