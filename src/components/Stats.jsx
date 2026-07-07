import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;
import {
  FaBuilding,
  FaUsers,
  FaAward,
  FaMapMarkerAlt,
} from "react-icons/fa";
export default function Stats() {
  const stats = [
    { icon: <FaBuilding />, number: 8000, label: "Projects Completed" },
    { icon: <FaUsers />, number: 100, label: "Happy Clients" },
    { icon: <FaAward />, number: 30, label: "Years Experience" },
    { icon: <FaMapMarkerAlt />, number: 25, label: "Cities Served" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center text-blue-100">

        {stats.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
          >

           <div className="text-4xl text-white mb-3 flex justify-center">
      {item.icon}
    </div>

         <h3 className="text-4xl font-bold text-white">
  <CountUp
    start={0}
    end={item.number}
    duration={4.5}
  />
  +
</h3>

            <p className="mt-2">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}