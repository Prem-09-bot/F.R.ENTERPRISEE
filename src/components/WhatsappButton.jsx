import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/91 9735770525"
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-4 md:right-6
        z-50
        flex
        items-center
        gap-3
        bg-green-500
        text-white
        px-5
        py-3
        rounded-full
        shadow-xl
        hover:scale-105
        transition-all
        animate-bounce
      "
    >
      <FaWhatsapp />
      <span className="hidden md:block">
        WhatsApp
      </span>
    </a>
  );
}