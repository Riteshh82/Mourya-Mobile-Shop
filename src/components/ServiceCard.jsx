import { MessageCircle } from "lucide-react";
import { CategoryIcon } from "../utils/icons.jsx";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function ServiceCard({ name, description, icon, whatsappMessage }) {
  const href = buildWhatsAppLink(whatsappMessage);

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy-50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-marigold-50 text-marigold-600">
        <CategoryIcon name={icon} />
      </div>
      <h3 className="font-display text-lg font-semibold text-navy-600">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500/75">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.03]"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        Get Service on WhatsApp
      </a>
    </div>
  );
}
