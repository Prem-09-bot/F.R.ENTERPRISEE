import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import useSettings from "../hooks/useSettings";

export default function Footer() {
    const { settings } = useSettings();

  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h3 className="text-2xl font-bold">
               {settings?.companyName || "F.R. ENTERPRISEE"}
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Premium solutions in Glass, Aluminium,
              ACP Cladding, Structural Glazing and
              Architectural Fabrication.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="
                  w-10 h-10
                  rounded-full
                  bg-blue-600
                  flex items-center justify-center
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  rounded-full
                  bg-blue-600
                  flex items-center justify-center
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  rounded-full
                  bg-blue-600
                  flex items-center justify-center
                "
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>ACP Cladding</li>
              <li>Structural Glazing</li>
              <li>Glass Installation</li>
              <li>UPVC Systems</li>
              <li>False Ceiling</li>

            </ul>
          </div>

          <div>

            <h4 className="font-bold text-xl mb-5">
              Contact
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-500" />
                <span className="text-slate-400">
                  +91 9830493684
                </span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-500" />
                <span className="text-slate-400">
                  +91 9836269644
                </span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-500" />
                <span className="text-slate-400">
                 +91 9735770525
                </span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-500" />
                <span className="text-slate-400">
                  +91 8240351739
                </span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-500" />
                <span className="text-slate-400">
                 f.r.enterprisee@gmail.com
                </span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span className="text-slate-400">
                  {settings?.address || "Kolkata, India"}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        ">

          <p className="text-slate-500 text-sm">
            © 2026 {settings?.companyName || "F.R. Enterprisee"}. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm">
            
          </p>

        </div>

      </div>

    </footer>
  );
}