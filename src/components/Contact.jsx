import { Phone, MessageCircle, Navigation, MapPin, Clock } from "lucide-react";
import { shopInfo } from "../config/shopConfig";
import { buildWhatsAppLink } from "../utils/whatsapp";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const whatsappHref = buildWhatsAppLink("Hi, I'd like to visit the shop. Could you share directions?");

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-navy-600 to-navy-500 py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-marigold-400 bg-blob animate-blob opacity-20" />

      <div className="container-shop relative grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">Visit our shop</h2>

          <dl className="mt-8 space-y-5">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-marigold-400" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-paper/60">Address</dt>
                <dd className="mt-1 text-paper">{shopInfo.address}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-marigold-400" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-paper/60">Phone</dt>
                <dd className="mt-1 text-paper">{shopInfo.phone}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-marigold-400" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-paper/60">WhatsApp</dt>
                <dd className="mt-1 text-paper">{shopInfo.phone}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-marigold-400" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-paper/60">Opening Hours</dt>
                <dd className="mt-1 text-paper">{shopInfo.openingHours}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${shopInfo.phone}`} className="btn-primary shine">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={shopInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:bg-paper hover:text-navy-600"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="overflow-hidden rounded-2xl ring-1 ring-white/10">
          <iframe
            title="Shop location"
            src={shopInfo.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ minHeight: "320px", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Reveal>
      </div>
    </section>
  );
}