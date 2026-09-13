import { MessageCircle, ShoppingBag, Check } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { CategoryIcon } from "../utils/icons.jsx";

const pegboardItems = [
  { icon: "cover", tone: "bg-navy-500 text-marigold-400" },
  { icon: "shield", tone: "bg-teal-500 text-paper" },
  { icon: "earbuds", tone: "bg-marigold-400 text-navy-600" },
  { icon: "charger", tone: "bg-teal-400 text-paper" },
  { icon: "powerbank", tone: "bg-navy-400 text-marigold-400" },
  { icon: "cable", tone: "bg-marigold-500 text-navy-600" },
  { icon: "speaker", tone: "bg-teal-600 text-paper" },
  { icon: "holder", tone: "bg-navy-600 text-marigold-400" },
  { icon: "memory", tone: "bg-marigold-400 text-navy-600" },
];

const trustItems = [
  "Quality Products",
  "Affordable Prices",
  "Quick Service",
  "Local & Trusted",
];

export default function Hero() {
  const whatsappHref = buildWhatsAppLink(
    "Hi, I want to know more about your shop."
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-14 sm:pt-20"
    >
      {/* ambient background blobs — the single "alive" moment on the page */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-400 bg-blob animate-blob" />
      <div className="pointer-events-none absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-marigold-400 bg-blob animate-blob [animation-delay:-4s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-dot-grid opacity-40" />

      <div className="container-shop relative grid items-center gap-12 md:grid-cols-2 md:gap-8">
        <div className="animate-fadeInUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-teal-600 shadow-sm ring-1 ring-teal-100">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
            Now open for walk-ins & WhatsApp orders
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.12] text-navy-600 sm:text-5xl">
            Mobile accessories & digital services,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">all in one place</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 13C60 4 240 4 298 14"
                  fill="none"
                  stroke="#F4A93B"
                  strokeWidth="7"
                  strokeLinecap="round"
                  pathLength="1"
                  className="draw-underline"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-navy-500/80 sm:text-lg">
            Quality mobile accessories, SIM services, money transfer, ticket
            booking and everyday digital services at your local shop.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary shine">
              <ShoppingBag className="h-4 w-4" />
              Shop Products
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustItems.map((item, i) => (
              <li
                key={item}
                style={{ animationDelay: `${150 + i * 90}ms` }}
                className="flex animate-fadeInUp items-center gap-2 rounded-xl bg-white/80 px-3 py-2.5 text-xs font-semibold text-navy-600 opacity-0 shadow-sm ring-1 ring-navy-50 [animation-fill-mode:forwards]"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-teal-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto grid w-full max-w-sm grid-cols-3 gap-3 sm:gap-4">
          {pegboardItems.map((item, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 90}ms` }}
              className={`flex aspect-square animate-popIn items-center justify-center rounded-2xl opacity-0 shadow-lift transition-transform duration-300 [animation-fill-mode:forwards] hover:scale-110 hover:rotate-3 ${
                item.tone
              } ${i % 2 === 0 ? "animate-float" : "animate-floatSlow"}`}
            >
              <CategoryIcon
                name={item.icon}
                className="h-7 w-7 sm:h-8 sm:w-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
