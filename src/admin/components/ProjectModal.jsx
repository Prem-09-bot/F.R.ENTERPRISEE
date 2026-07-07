import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({
  open,
  onClose,
  onSave,
  project,
}) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    client: "",
    location: "",
    description: "",
    status: "Completed",
    featured: false,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setForm({
        title: project.title || "",
        category: project.category || "",
        client: project.client || "",
        location: project.location || "",
        description: project.description || "",
        status: project.status || "Completed",
        featured: project.featured || false,
      });

      setPreview(project.image || "");
    } else {
      setForm({
        title: "",
        category: "",
        client: "",
        location: "",
        description: "",
        status: "Completed",
        featured: false,
      });

      setImage(null);
      setPreview("");
    }
  }, [project, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
            {project ? "Edit Project" : "Add Project"}
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
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3"
          />

          <input
            name="client"
            placeholder="Client Name"
            value={form.client}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3"
          >
            <option value="">Select Category</option>
            <option>Glass Facade</option>
            <option>ACP Cladding</option>
            <option>Structural Glazing</option>
            <option>Aluminium Works</option>
            <option>False Ceiling</option>
          </select>

          <textarea
            rows="5"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded-xl p-3"
          />

          <div>

            <label className="block mb-2 font-semibold">
              Project Image
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
              className="w-full h-60 object-cover rounded-xl border"
            />
          )}

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>Completed</option>
            <option>Ongoing</option>
            <option>Upcoming</option>
          </select>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />

            Featured Project

          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-800 text-white py-4 rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Saving..." : "Save Project"}
          </button>

        </form>

      </div>
    </div>
  );
}