import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function WhatsAppFloat() {
  const href = buildWhatsAppLink("Hi, I have a query about your products/services.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 animate-ringPulse items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#1FB855] text-white shadow-lift transition-transform hover:scale-110 md:hidden"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}