import { motion } from "framer-motion";
import {
  FaUsersCog,
  FaCertificate,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      icon: <FaUsersCog />,
      title: "In-House Teams",
      desc: "Designers, fabricators & installers under one roof — no outsourcing, no quality gaps.",
    },
    {
      number: "02",
      icon: <FaCertificate />,
      title: "Certified Quality",
      desc: "GST-registered, ISO-grade processes & rigorously sourced premium materials.",
    },
    {
      number: "03",
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "Milestone-based execution with weekly progress reports — we meet committed dates.",
    },
    {
      number: "04",
      icon: <FaClipboardCheck />,
      title: "End-to-End Accountability",
      desc: "One contract, one project manager, one accountable partner from concept to handover.",
    },
  ];

  return (
   <section
  id="why-us"
  className="py-28 bg-gradient-to-b from-slate-50 to-white"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>

        <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
          Why Choose Us
        </span>

        <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Why F.R.
          <span className="block text-blue-700">
            ENTERPRISE.
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          We combine the rigor of an engineering firm with the
          reliability of a trusted contractor ensuring every
          project, regardless of scale, meets exacting standards.
        </p>

        <div className="
          mt-10
          bg-blue-900
          text-white
          rounded-3xl
          p-8
          shadow-2xl
          relative
          overflow-hidden
        ">

          <div className="
            absolute
            -top-10
            -left-5
            text-[120px]
            text-white/10
            font-bold
          ">
            "
          </div>

          <span className="uppercase tracking-[3px] text-blue-200">
            Our Promise
          </span>

          <h3 className="
            mt-4
            text-2xl
            md:text-3xl
            font-bold
            leading-relaxed
          ">
            We don't just install —
            we engineer.
          </h3>

          <p className="mt-4 text-blue-100 leading-relaxed">
            Every facade, every joint, every weld holds
            the weight of our reputation.
          </p>

        </div>

      </div>

      <div className="grid gap-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-slate-100
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            <div className="flex gap-6">

              <div className="
                text-6xl
                font-bold
                text-blue-100
                min-w-[80px]
              ">
                {item.number}
              </div>

              <div>

                <div className="
                  text-blue-700
                  text-2xl
                  mb-3
                ">
                  {item.icon}
                </div>

                <h3 className="
                  text-2xl
                  font-bold
                  mb-3
                ">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>
  );
}