import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from "../../config";

import Layout from "../components/Layout";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/projects`);

      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const saveProject = async (projectData) => {
    try {
      if (selectedProject) {
        await axios.put(
  `${API_URL}/projects/${selectedProject._id}`,
          projectData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Project Updated Successfully");
      } else {
        await axios.post(
  `${API_URL}/projects`,
          projectData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Project Added Successfully");
      }

      fetchProjects();

      setOpen(false);
      setSelectedProject(null);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this project?"
    );

    if (!confirmDelete) return;

    try {
     await axios.delete(
  `${API_URL}/projects/${id}`
);

      alert("Project Deleted");

      fetchProjects();
    } catch (err) {
     console.error(err);
      alert("Delete Failed");
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Projects
        </h1>

        <button
          onClick={() => {
            setSelectedProject(null);
            setOpen(true);
          }}
          className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-xl"
        >
          + Add Project
        </button>

      </div>

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search Project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-3 w-full md:w-96"
        />

      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">

            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Featured</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredProjects.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8 text-gray-500"
                >
                  No Projects Found
                </td>
              </tr>
            ) : (
              filteredProjects.map((project) => (
                <tr
                  key={project._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {project.title}
                  </td>

                  <td className="p-4">
                    {project.category}
                  </td>

                  <td className="p-4">
                    {project.location}
                  </td>

                  <td className="p-4">
                    {project.status}
                  </td>

                  <td className="p-4">
                    {project.featured ? "⭐ Yes" : "No"}
                  </td>

                  <td className="p-4">
                    {project.image ? (
                      <img
                src={
  project.image
    ? `${API_URL.replace("/api", "")}/${project.image}`
    : "/placeholder.jpg"
}
                        alt={project.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-400">
                        No Image
                      </span>
                    )}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setOpen(true);
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          deleteProject(project._id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      <ProjectModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedProject(null);
        }}
        onSave={saveProject}
        project={selectedProject}
      />

    </Layout>
  );
}