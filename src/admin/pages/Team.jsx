import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from "../../config";

import Layout from "../components/Layout";
import TeamModal from "../components/TeamModal";

export default function Team() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await axios.get(`${API_URL}/team`);

      setMembers(res.data);

    } catch (err) {
      console.error(err);
    }
  };

  const saveMember = async (memberData) => {
    try {

      if (selectedMember) {

        await axios.put(
          `http://localhost:5000/api/team/${selectedMember._id}`,
          memberData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Member Updated Successfully");

      } else {

        await axios.post(
          "http://localhost:5000/api/team",
          memberData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Member Added Successfully");

      }

      fetchMembers();

      setOpen(false);

      setSelectedMember(null);

    } catch (err) {

      console.error(err);

      alert("Something went wrong");

    }
  };

  const deleteMember = async (id) => {

    if (!window.confirm("Delete this member?"))
      return;

    try {

      await axios.delete(
        `http://localhost:5000/api/team/${id}`
      );

      fetchMembers();

    } catch (err) {

      console.error(err);

    }

  };

  return (
    <Layout>

      <div className="flex justify-between items-center mb-8">

        <input
          type="text"
          placeholder="Search Member..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-xl px-4 py-3 w-80"
        />

        <h1 className="text-4xl font-bold">
          Team Members
        </h1>

        <button
          onClick={() => {
            setSelectedMember(null);
            setOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          + Add Member
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">

            <tr>

              <th className="p-4">
                Photo
              </th>

              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Designation
              </th>

              <th className="p-4">
                Experience
              </th>

              <th className="p-4">
                Status
              </th>

              <th className="p-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {members
              .filter((member) =>
                member.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((member) => (

                <tr
                  key={member._id}
                  className="border-b"
                >

                  <td className="p-4">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />

                  </td>

                  <td className="p-4 font-semibold">
                    {member.name}
                  </td>

                  <td className="p-4">
                    {member.designation}
                  </td>

                  <td className="p-4">
                    {member.experience} Years
                  </td>

                  <td className="p-4">

                    {member.active ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                        Inactive
                      </span>
                    )}

                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <button
                        onClick={() => {
                          setSelectedMember(member);
                          setOpen(true);
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          deleteMember(member._id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

      <TeamModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedMember(null);
        }}
        onSave={saveMember}
        member={selectedMember}
      />

    </Layout>
  );
}