import { motion } from "framer-motion";

export default function CeoMessage() {
  return (
    <section id="ceo" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/Ceo.jpg"
              alt="CEO"
              className="
                w-full
                max-w-md
                mx-auto
                rounded-full
                shadow-2xl
                border-8
                border-white
              "
            />
            <div className="text-center mt-6">

  <h3 className="text-2xl font-bold">
    Sekh Fazlul Haque
  </h3>

  <p className="text-gray-500">
    Founder & Chief Executive Officer
  </p>

</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
              Leadership Message
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Message From The CEO
            </h2>

            <blockquote className="
              mt-6
              text-xl
              italic
              text-slate-700
              border-l-4
              border-blue-700
              pl-6
            ">
              "We don't just install — we engineer.
              Every facade, every joint, every weld
              holds the weight of our reputation.  For three decades, that's been our standard."
            </blockquote>

            <p className="mt-8 text-gray-600 leading-relaxed">
              With over three decades of hands-on industry experience, Sekh Fazlul Haque has built F.R. ENTERPRISE on the principles of engineering precision, client trust, and uncompromising quality. His vision continues to guide the company across India and select international markets.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="text-center">
                <h4 className="text-3xl font-bold text-blue-700">
                  30+
                </h4>
                <p className="text-gray-600 text-sm">
                  Years Experience
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-bold text-blue-700">
                  8000+
                </h4>
                <p className="text-gray-600 text-sm">
                  Projects Delivered
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-bold text-blue-700">
                  500+
                </h4>
                <p className="text-gray-600 text-sm">
                  Trusted Clients
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}