import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { API_URL } from "../../config";

export default function Settings() {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    map: "",
    footerText: "",
  });

  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await axios.get(`${API_URL}/settings`);

      setForm({
        companyName: res.data.companyName || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        whatsapp: res.data.whatsapp || "",
        address: res.data.address || "",
        facebook: res.data.facebook || "",
        instagram: res.data.instagram || "",
        linkedin: res.data.linkedin || "",
        youtube: res.data.youtube || "",
        map: res.data.map || "",
        footerText: res.data.footerText || "",
      });

      setPreview(res.data.logo || "");

    } catch (err) {
     console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLogo(file);
    setPreview(URL.createObjectURL(file));
  };

  const saveSettings = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = new FormData();

      Object.keys(form).forEach((key) => {
        data.append(key, form[key]);
      });

      if (logo) {
        data.append("logo", logo);
      }

      await axios.put(
        `${API_URL}/settings`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Settings Updated Successfully");

      fetchSettings();

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <Layout>

      <h1 className="text-4xl font-bold mb-8">
        Website Settings
      </h1>

      <form
        onSubmit={saveSettings}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-5"
      >

        <input
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
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
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={form.whatsapp}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <textarea
          rows="3"
          name="address"
          placeholder="Company Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          name="facebook"
          placeholder="Facebook URL"
          value={form.facebook}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          name="instagram"
          placeholder="Instagram URL"
          value={form.instagram}
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

        <input
          name="youtube"
          placeholder="YouTube URL"
          value={form.youtube}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          name="map"
          placeholder="Google Map Link"
          value={form.map}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          name="footerText"
          placeholder="Footer Text"
          value={form.footerText}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <div>

          <label className="block font-semibold mb-2">
            Company Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleLogo}
          />

        </div>

        {preview && (
          <img
            src={preview}
            alt="Logo Preview"
            className="h-28 object-contain border rounded-xl p-2"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl"
        >
          {loading ? "Saving..." : "Save Settings"}
        </button>

      </form>

    </Layout>
  );
}