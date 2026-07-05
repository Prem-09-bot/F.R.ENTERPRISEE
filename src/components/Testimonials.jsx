import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Commercial Complex Project",
      review:
        "Outstanding workmanship and timely delivery. The team exceeded our expectations and delivered exceptional quality.",
    },
    {
      name: "Amit Verma",
      company: "Corporate Office Facade",
      review:
        "Professional team, premium materials and excellent project management from start to finish.",
    },
    {
      name: "Sanjay Gupta",
      company: "Residential Skylight Project",
      review:
        "Their attention to detail and engineering expertise made the entire process seamless.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-xl
                relative
              "
            >

              <FaQuoteLeft
                className="
                  text-blue-700
                  text-4xl
                  mb-6
                "
              />

              <div className="flex gap-1 text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-relaxed">
                {item.review}
              </p>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-blue-700 text-sm">
                  {item.company}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}