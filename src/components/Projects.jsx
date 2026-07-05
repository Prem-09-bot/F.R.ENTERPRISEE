import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <section id="projects" className="py-28 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Projects That Define Excellence
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto">
            Delivering facade, glazing and architectural
            solutions across commercial, industrial and
            residential sectors.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="
                group
                overflow-hidden
                rounded-3xl
                relative
                h-[400px]
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                "
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent
              " />

              <div className="
                absolute
                bottom-0
                left-0
                p-8
              ">

                <span className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-600
                  text-white
                  text-sm
                ">
                  {project.category}
                </span>

                <h3 className="
                  text-white
                  text-3xl
                  font-bold
                  mt-4
                ">
                  {project.title}
                </h3>

                <p className="text-slate-300 mt-2">
                  {project.location}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}