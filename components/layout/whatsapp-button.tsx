"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  // Número do WhatsApp (substitua pelo seu número)
  const phoneNumber = "5534996367821"; // Altere para seu número
  const message = "Olá! Gostaria de saber mais sobre os serviços da Editec Sistemas.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </button>
  );
} 