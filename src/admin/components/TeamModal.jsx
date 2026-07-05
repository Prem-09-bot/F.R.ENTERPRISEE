import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function TeamModal({
  open,
  onClose,
  onSave,
  member,
}) {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    experience: "",
    email: "",
    phone: "",
    linkedin: "",
    bio: "",
    active: true,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (member) {
      setForm({
        name: member.name || "",
        designation: member.designation || "",
        experience: member.experience || "",
        email: member.email || "",
        phone: member.phone || "",
        linkedin: member.linkedin || "",
        bio: member.bio || "",
        active: member.active,
      });

      setPreview(member.image || "");
    } else {
      setForm({
        name: "",
        designation: "",
        experience: "",
        email: "",
        phone: "",
        linkedin: "",
        bio: "",
        active: true,
      });

      setPreview("");
      setImage(null);
    }
  }, [member, open]);

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

      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            {member ? "Edit Member" : "Add Team Member"}
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
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3"
          />

          <input
            name="designation"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3"
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            value={form.experience}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            name="linkedin"
            placeholder="LinkedIn URL"
            value={form.linkedin}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <textarea
            rows="4"
            name="bio"
            placeholder="Short Bio"
            value={form.bio}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <div>

            <label className="block font-semibold mb-2">
              Profile Photo
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
              className="w-40 h-40 rounded-full object-cover border mx-auto"
            />

          )}

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />

            Active Member

          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl disabled:bg-gray-400"
          >
            {loading
              ? "Saving..."
              : "Save Member"}
          </button>

        </form>

      </div>

    </div>
  );
}