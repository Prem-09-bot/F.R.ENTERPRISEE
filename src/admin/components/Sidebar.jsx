import {
  FaTachometerAlt,
  FaEnvelope,
  FaProjectDiagram,
  FaUsers,
  FaTools,
  FaStar,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTimes,
  FaCog,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {

const navigate = useNavigate();

const logout = () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");

  if (!confirmLogout) return;

  localStorage.removeItem("token");

  navigate("/admin/login");
};

  const menus = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },
    {
      name: "Inquiries",
      icon: <FaEnvelope />,
      path: "/admin/inquiries",
    },
    {
      name: "Projects",
      icon: <FaProjectDiagram />,
      path: "/admin/projects",
    },
    {
      name: "Team",
      icon: <FaUsers />,
      path: "/admin/team",
    },
    {
      name: "Services",
      icon: <FaTools />,
      path: "/admin/services",
    },
    {
      name: "Testimonials",
      icon: <FaStar />,
      path: "/admin/testimonials",
    },
    {
      name: "FAQ",
      icon: <FaQuestionCircle />,
      path: "/admin/FAQ",
    },
    {
  name: "Settings",
  icon: <FaCog />,
  path: "/admin/settings",
},
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-72
          bg-slate-900 text-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
    
        <div className="flex items-center justify-between p-6 border-b border-slate-700">

          <h2 className="text-2xl font-bold">
            F.R Admin
          </h2>

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        <div className="mt-6">

          {menus.map((menu) => (
            <Link
              key={menu.name}
              to={menu.path}
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-4
                px-6
                py-4
                hover:bg-blue-600
                transition
              "
            >
              {menu.icon}
              {menu.name}
            </Link>
          ))}

          <button
           onClick={logout}
            className="
              w-full
              flex
              items-center
              gap-4
              px-6
              py-4
              hover:bg-red-600
              transition
            "
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </aside>
    </>
  );
}