import { MessageCircle } from "lucide-react";
import { CategoryIcon } from "../utils/icons.jsx";
import { buildWhatsAppLink, productEnquiryMessage } from "../utils/whatsapp";

export default function ProductCard({ name, description, icon }) {
  const href = buildWhatsAppLink(productEnquiryMessage(name));

  return (
    <div className="shine group flex h-full flex-col rounded-2xl bg-white p-5 shadow-card ring-1 ring-navy-50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:ring-teal-100">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-500 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-teal-500 group-hover:text-white">
        <CategoryIcon name={icon} />
      </div>
      <h3 className="font-display text-base font-semibold text-navy-600">{name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-navy-500/75">{description}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-marigold-600">
        Ask Price
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#1FB855] px-4 py-2 text-xs font-semibold text-white transition-transform duration-300 hover:scale-[1.05]"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        Enquire on WhatsApp
      </a>
    </div>
  );
}