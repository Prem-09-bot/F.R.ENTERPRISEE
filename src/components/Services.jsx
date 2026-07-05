import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaBuilding,
  FaLayerGroup,
  FaTools,
  FaDraftingCompass,
  FaCubes,
  FaHardHat,
  FaHome,
  FaSun,
  FaUmbrellaBeach,
} from "react-icons/fa";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="services" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Our Expertise
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
  Engineering Solutions That
  <span className="block text-blue-700">
    Shape Modern Architecture
  </span>
</h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
  From iconic glass facades and ACP cladding to structural glazing,
  aluminium fabrication and skylight systems, we deliver complete
  architectural solutions across commercial, industrial and residential projects.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
              h-full
              flex
              flex-col
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-300
                border
                border-gray-100
              "
            >
              <div className="text-4xl text-blue-700 mb-6">
                {service.icon || <FaTools/>}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className=" flex-grow text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 text-blue-700 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}