import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWarehouse,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  service: "",
  projectType: "",
  location: "",
  message: "",
});
   const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await axios.post(
      `${API_URL}/inquiry`,
      formData
    );

    alert(response.data.message);

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      projectType: "",
      location: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    alert("Failed to send inquiry.");
  }

  setLoading(false);
};

  return (
    <section
      id="contact"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Let's Discuss Your
            <span className="block text-blue-700">
              Next Project
            </span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="space-y-8">

            <div className="flex gap-5">
              <FaPhoneAlt className="text-blue-700 text-2xl" />
              <div>
                <h4 className="font-bold text-xl">
                  Phone
                </h4>
                <p className="text-gray-600">
                  +91 9830493684
                </p>
                <p className="text-gray-600">
                  +91 9836269644
                </p>
                <p className="text-gray-600">
                  +91 9735770525
                </p>
                <p className="text-gray-600">
                  +91 8240351739
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaEnvelope className="text-blue-700 text-2xl" />
              <div>
                <h4 className="font-bold text-xl">
                  Email
                </h4>
                <p className="text-gray-600">
                  f.r.enterprisee@gmail.com

                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaMapMarkerAlt className="text-blue-700 text-2xl" />
              <div>
                <h4 className="font-bold text-xl">
                  Office Address
                </h4>
                <p className="text-gray-600">
                  13, Golam Jilani Khan Road, Topsia, Kolkata, West Bengal – 700039
                </p>
              </div>
            </div>

             <div className="flex gap-5">
              <FaWarehouse className="text-blue-700 text-2xl" />
              <div>
                <h4 className="font-bold text-xl">
                  WareHouse
                </h4>
                <p className="text-gray-600">
                   147|J, West Chowbaga, Tiljala, Kolkata, West Bengal – 700039
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919735770525"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                bg-green-500
                text-white
                px-6
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              <FaWhatsapp />
              Chat On WhatsApp
            </a>

          </div>

<form
  onSubmit={handleSubmit}
  className="
    bg-white
    p-8
    rounded-3xl
    shadow-xl
  "
>
  <div className="grid md:grid-cols-2 gap-5">

  <input
  type="text"
  placeholder="Full Name *"
  value={formData.name}
  required
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  className="w-full border rounded-xl p-4 outline-none"
/>

   <input
  type="tel"
  placeholder="Mobile Number *"
  value={formData.phone}
  required
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="w-full border rounded-xl p-4 outline-none"
/>

  </div>

  <div className="mt-5">
    <input
  type="email"
  placeholder="Email Address *"
  value={formData.email}
  required
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="w-full border rounded-xl p-4 outline-none"
/>
  </div>

  <div className="mt-5">
   <select
  value={formData.service}
  required
  onChange={(e) =>
    setFormData({
      ...formData,
      service: e.target.value,
    })
  }
  className="w-full border rounded-xl p-4 outline-none"
>
      <option value="">Select Service Required *</option>
      <option>Glass Facade</option>
      <option>ACP Cladding</option>
      <option>Structural Glazing</option>
      <option>Aluminium Works</option>
      <option>False Ceiling</option>
      <option>Project Execution</option>
    </select>
  </div>

  <div className="grid md:grid-cols-2 gap-5 mt-5">

    <select
  value={formData.projectType}
  onChange={(e) =>
    setFormData({
      ...formData,
      projectType: e.target.value,
    })
  }
  className="w-full border rounded-xl p-4 outline-none"
>
      <option value="">Project Type</option>
      <option>Residential</option>
      <option>Commercial</option>
      <option>Industrial</option>
      <option>Government</option>
    </select>

<input
  type="text"
  placeholder="Location"
  value={formData.location}
  onChange={(e) =>
    setFormData({
      ...formData,
      location: e.target.value,
    })
  }
  className="w-full border rounded-xl p-4 outline-none"
/>

  </div>

  <div className="mt-5">
   <textarea
  rows="5"
  placeholder="Tell us about your project..."
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="w-full border rounded-xl p-4 outline-none"
/>
  </div>

 <button
  type="submit"
  disabled={loading}
  className="
    mt-5
    w-full
    bg-blue-700
    text-white
    py-4
    rounded-xl
    font-semibold
    hover:bg-blue-800
    transition
    disabled:opacity-70
  "
>
  {loading ? "Sending..." : "Send Inquiry"}
</button>
</form>
          

        </div>

<div className="mt-20">
  <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
    <iframe
  title="F.R. Enterprise Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.1045050208962!2d88.3881184018743!3d22.53568252041574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276bc6e99578b%3A0xe043e63de09e5f32!2s13%2C%20Gulam%20Jilani%20Khan%20Rd%2C%20Topsia%2C%20Kolkata%2C%20West%20Bengal%20700039!5e1!3m2!1sen!2sin!4v1782255311646!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>
  </div>
</div>


      </div>
    </section>
  );
} 