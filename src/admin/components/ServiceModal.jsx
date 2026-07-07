import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function ServiceModal({
  open,
  onClose,
  onSave,
  service,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    icon: "",
    featured: false,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (service) {
      setForm({
        title: service.title || "",
        description: service.description || "",
        icon: service.icon || "",
        featured: service.featured || false,
      });

      setPreview(service.image || "");
    } else {
      setForm({
        title: "",
        description: "",
        icon: "",
        featured: false,
      });

      setImage(null);
      setPreview("");
    }
  }, [service, open]);

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
            {service ? "Edit Service" : "Add Service"}
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
            placeholder="Service Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3"
          />

          <input
            name="icon"
            placeholder="React Icon Name (Example: FaBuilding)"
            value={form.icon}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Service Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <div>

            <label className="block font-semibold mb-2">
              Service Image
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
              className="w-full h-56 object-cover rounded-xl border"
            />
          )}

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />

            Featured Service

          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl disabled:bg-gray-400"
          >
            {loading ? "Saving..." : "Save Service"}
          </button>

        </form>

      </div>

    </div>
  );
}