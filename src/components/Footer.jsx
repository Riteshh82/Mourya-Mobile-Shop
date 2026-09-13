import { MessageCircle, MapPin } from "lucide-react";
import { shopInfo, products, services } from "../config/shopConfig";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Footer() {
  const whatsappHref = buildWhatsAppLink("Hi, I have a query about your products/services.");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-500 pt-14 text-paper/90">
      <div className="container-shop grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-paper">{shopInfo.shopName}</p>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            Mobile accessories, SIM services, money transfer and ticket
            booking — all at your local shop in {shopInfo.area}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper">Products</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            {products.slice(0, 5).map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            {services.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper">Contact</p>
          <ul className="mt-3 space-y-3 text-sm text-paper/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-marigold-400" />
              {shopInfo.address}
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-marigold-400 hover:text-marigold-500"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <a
                href={shopInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-paper/30 underline-offset-2 hover:text-paper"
              >
                View on Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-5">
        <p className="container-shop text-center text-xs text-paper/60">
          © {year} {shopInfo.shopName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
