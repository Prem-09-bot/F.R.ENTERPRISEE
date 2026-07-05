import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+91 9735770525"
      className="
        fixed
        bottom-24
        right-4 md:right-6
        z-50
        flex
        items-center
        gap-3
        bg-blue-700
        text-white
        px-5
        py-3
        rounded-full
        shadow-xl
        hover:scale-105
        transition-all
        duration-300
        animate-bounce
      "
    >
      <FaPhoneAlt />
      <span className="hidden md:block">
        Call Now
      </span>
    </a>
  );
}