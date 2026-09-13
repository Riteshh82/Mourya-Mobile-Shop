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

const trustItems = ["Quality Products", "Affordable Prices", "Quick Service", "Local & Trusted"];

export default function Hero() {
  const whatsappHref = buildWhatsAppLink("Hi, I want to know more about your shop.");

  return (
    <section id="home" className="overflow-hidden pb-14 pt-12 sm:pt-16">
      <div className="container-shop grid items-center gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-navy-600 sm:text-5xl">
            Mobile accessories & digital services, all in one place
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-navy-500/80 sm:text-lg">
            Quality mobile accessories, SIM services, money transfer, ticket
            booking and everyday digital services at your local shop.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">
              <ShoppingBag className="h-4 w-4" />
              Shop Products
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2.5 text-xs font-semibold text-navy-600 shadow-sm ring-1 ring-navy-50"
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
              className={`flex aspect-square items-center justify-center rounded-2xl shadow-card ${item.tone} ${
                i % 4 === 0 ? "translate-y-2" : i % 3 === 0 ? "-translate-y-2" : ""
              }`}
            >
              <CategoryIcon name={item.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
