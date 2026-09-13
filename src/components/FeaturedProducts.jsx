import { MessageCircle } from "lucide-react";
import { featuredProducts } from "../config/shopConfig";
import { CategoryIcon } from "../utils/icons.jsx";
import { buildWhatsAppLink, productEnquiryMessage } from "../utils/whatsapp";

export default function FeaturedProducts() {
  return (
    <section className="bg-navy-600 py-14 sm:py-16">
      <div className="container-shop">
        <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
          Popular right now
        </h2>

        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          {featuredProducts.map((item) => {
            const href = buildWhatsAppLink(productEnquiryMessage(item.name));
            return (
              <div
                key={item.id}
                className="w-56 shrink-0 snap-start rounded-2xl bg-navy-500/60 p-5 ring-1 ring-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-marigold-400 text-navy-600">
                  <CategoryIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-paper">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-paper/70">{item.feature}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-marigold-400 hover:text-marigold-500"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Enquire Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
