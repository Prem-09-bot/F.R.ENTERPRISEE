import { motion } from "framer-motion";

export default function Team() {
  const team = [
    {
      name: "Sekh Fazlul Haque",
      role: "Chief Executive Officer",
      short: "CEO",
      image:
        "/Ceo.jpg",
    },
    {
      name: "SK Rahamat Ali",
      role: "Director",
      short: "Director",
      image:
        "/director.jpg",
    },
    {
      name: "SK Niyamat Ali",
      role: "Chief Marketing Officer",
      short: "CMO",
      image:
        "/Cmo.jpg",
    },
    {
      name: "SK Tofazzel Haque",
      role: "Chief Financial Officer",
      short: "CFO",
      image:
        "/Cfo.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 md:py-28 bg-gradient-to-b from-white to slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Leadership Team
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Meet The People Behind
            <span className="block text-blue-700">
              F.R. Enterprise
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Experienced professionals leading innovation,
            quality, and execution across every project.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >

              <div className="relative inline-block">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-64
                    h-64
                    sm:w-56
                    sm:h-56
                    md:w-64
                    md:h-64
                    object-cover
                    rounded-full
                    border-4
                    md:border-8
                    border-white
                    shadow-xl
                    md:group-hover:scale-105
                    transition-transform
                    duration-300
                  "
                />

                <div
                  className="
                    absolute
                    bottom-3
                    left-1/2
                    -translate-x-1/2
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded-md
                    text-xs
                    font-bold
                    uppercase
                    shadow-lg
                  "
                >
                  {member.short}
                </div>

              </div>

              <h3 className="text-xl font-bold mt-6">
                {member.name}
              </h3>

              <p className="text-blue-700 mt-2 font-medium">
                {member.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}