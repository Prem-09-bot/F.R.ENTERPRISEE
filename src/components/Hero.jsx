import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCheckCircle, FaBuilding, FaUsers, FaAward, } 
from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden w-full h-full object-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8,47,73,.85), rgba(37,99,235,.85)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute inset-0 opacity-10">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </div>

      <div className="max-w-screen-xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className="text-white"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-blue-500/20">
          <span className="h-2 w-2 rounded-full bg-green-400"></span>
          <span className="text-sm">
             30+ Years of Industry Excellence
          </span>
          </div>

          <h1 className="mt-6 text-6xl md:text-7xl font-bold leading-tight">
             Building Iconic
         <span className="block text-blue-300">
             Facades &
         </span>
             Tomorrow's Industry
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl">
            From towering structural glazing to precision ACP cladding — F.R. Enterprise has delivered 8000+ premium installations engineered to last.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact"
             className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold shadow-xl hover:-translate-y-1 transition-all duration-300">
              Get Quote
            </a>

            <a href="#projects"
             className="border border-white px-8 py-4 rounded-xl backdrop-blur-md hover:bg-white hover:text-blue-900 transition-all duration-300">
              View Projects
            </a>
          </div>

       
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>8000+ Projects Delivered</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>100+ Happy Clients</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>30+ Years Experience</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Pan India Service</span>
            </div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-md ml-auto">

            <span className="uppercase text-red-500 tracking-[3px] text-sm font-semibold">
              Why Clients Trust Us
            </span>

            <h3 className="mt-4 text-3xl font-bold text-slate-800">
              Delivering Excellence Across Industries
            </h3>

           <div className="space-y-5 mt-8">

  <div className="flex justify-between border-b border-slate-200 pb-3">
    <span className="text-slate-500">
      Projects Completed
    </span>

    <span className="font-bold text-slate-900">
      8000+
    </span>
  </div>

  <div className="flex justify-between border-b border-slate-200 pb-3">
    <span className="text-slate-500">
      Client Satisfaction
    </span>

    <span className="font-bold text-slate-900">
      98%
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-slate-500">
      Support
    </span>

    <span className="font-bold text-slate-900">
      24/7
    </span>
  </div>

</div>

            <a
  href="#contact"
  className="
    mt-8
    w-full
    block
    text-center
    bg-blue-700
    text-white
    py-4
    rounded-xl
    font-semibold
    hover:bg-blue-800
    transition
  "
>
  Request Consultation
</a>
          </div>



 <div className="hidden lg:flex absolute -bottom-8 -left-10 bg-white rounded-2xl shadow-xl p-6 gap-8"> 
  <div className="text-center">
     <FaBuilding className="mx-auto text-blue-700 text-2xl" /> 
     <h4 className="font-bold text-xl mt-2"> 8000+ </h4> 
     <p className="text-sm text-gray-500"> Projects </p> 
     </div>
     
      <div className="text-center">
         <FaUsers className="mx-auto text-blue-700 text-2xl" />
          <h4 className="font-bold text-xl mt-2"> 100+ </h4>
           <p className="text-sm text-gray-500"> Clients </p> 
           </div> 
           
           <div className="text-center">
             <FaAward className="mx-auto text-blue-700 text-2xl" />
              <h4 className="font-bold text-xl mt-2"> 30+ </h4> 
              <p className="text-sm text-gray-500"> Years </p>
               </div> 
</div>
        </motion.div>

      </div>
    </section>
    
  );
}
