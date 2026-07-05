import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">

      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="flex-1 lg:ml-72 min-h-screen bg-slate-100">

        <Topbar setOpen={setOpen} />

        <div className="p-4 md:p-8">
          {children}
        </div>

      </div>

    </div>
  );
}