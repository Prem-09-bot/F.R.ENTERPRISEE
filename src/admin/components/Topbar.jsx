import { FaBars } from "react-icons/fa";

export default function Topbar({ setOpen }) {
  return (
    <div className="h-20 bg-white shadow flex items-center justify-between px-4 md:px-8">

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-2xl"
        >
          <FaBars />
        </button>

        <h2 className="text-xl md:text-2xl font-bold">
          Admin Dashboard
        </h2>

      </div>

      <div className="flex items-center gap-3">

        <div className="hidden sm:block text-right">
          <p className="font-semibold">
            Administrator
          </p>

          <p className="text-gray-500 text-sm">
            F.R. Enterprise
          </p>
        </div>

        <img
          src="/logo.jpg"
          alt="Admin"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        />

      </div>

    </div>
  );
}