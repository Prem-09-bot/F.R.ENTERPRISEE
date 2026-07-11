import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <div className="max-w-screen-xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000"
              alt="About Company"
              className="
                rounded-[30px]
                shadow-2xl
                object-cover
                w-full
                h-[550px]
              "
            />

            <div
              className="
              absolute
              -bottom-8
              -right-8
              bg-blue-700
              text-white
              p-8
              rounded-3xl
              shadow-2xl
              "
            >
              <h3 className="text-4xl font-bold">
                8000+
              </h3>

              <p>
                Projects Completed
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <span className="uppercase text-blue-700 font-semibold tracking-[3px]">
              About Company
            </span>

            <div className="
inline-flex
items-center
px-4
py-2
rounded-full
bg-blue-100
text-blue-700
font-medium
mb-4
">
  Since 1998 
</div>

            <h2 className="text-6xl font-bold mt-4 leading-tight">
              Delivering Excellence
              Across Industries
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Founded in 1998, F.R. ENTERPRISE has grown from a Kolkata-based fabrication unit into a trusted name in premium facade, glazing, and architectural cladding across India and select international markets. 
            </p>
            
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
             Under his leadership, F.R. ENTERPRISE has delivered 8000+ projects across commercial, industrial, and residential sectors — earning a reputation for precision, reliability, and on-time execution across India and select international destinations.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                Premium Materials
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                Skilled Workforce
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                On-Time Delivery
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                Pan India Operations
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}