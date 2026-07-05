import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useSettings from "../hooks/useSettings";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {settings} = useSettings();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-4">        
        <img
  src={settings?.logo || "/logo.jpg"}
  alt={settings?.companyName || "Logo"}
  className="h-16 w-auto object-contain"
/>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-none">
              {settings?.companyName || "F.R. ENTERPRISEE"}
            </h1>

            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Glass • Aluminium • ACP
            </p>
          </div>
        </div>

       
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about" className="hover:text-blue-700 transition">
            About
          </a>

          <a href="#services" className="hover:text-blue-700 transition">
            Services
          </a>

          <a href="#projects" className="hover:text-blue-700 transition">
            Projects
          </a>

          <a href="#team" className="hover:text-blue-700 transition">
            Team
          </a>

          <a href="#contact" className="hover:text-blue-700 transition">
            Contact
          </a>

         <a
  href="#contact"
  className="bg-blue-700 text-white px-8 py-4 rounded-full"
>
  Get a Quote
</a>
        </div>
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-5 flex flex-col gap-4 shadow-lg">
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="#team" onClick={() => setOpen(false)}>
            Team
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}