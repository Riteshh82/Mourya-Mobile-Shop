import { ShieldCheck, Tag, Zap, Layers, Smile, MapPin } from "lucide-react";
import Reveal from "./Reveal.jsx";

const features = [
  {
    icon: MapPin,
    title: "Trusted Local Shop",
    text: "A familiar shop in your neighbourhood, not a faceless website.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine & Quality Accessories",
    text: "We stock accessories chosen for everyday reliability.",
  },
  {
    icon: Tag,
    title: "Competitive Prices",
    text: "Fair pricing on every product and service we offer.",
  },
  {
    icon: Zap,
    title: "Quick Service",
    text: "Walk in or WhatsApp us — most requests are handled the same day.",
  },
  {
    icon: Layers,
    title: "Multiple Services Under One Roof",
    text: "Accessories, SIM, recharge, transfer and tickets — one visit.",
  },
  {
    icon: Smile,
    title: "Friendly Customer Support",
    text: "Our team is happy to help you pick the right product or service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-teal-50/60 py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-teal-400 bg-blob animate-blob opacity-20" />

      <div className="container-shop relative">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-navy-600 sm:text-4xl">
            Why customers choose us
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-2xl bg-white p-5 ring-1 ring-navy-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-teal-100">
                <div className="inline-flex rounded-lg bg-teal-50 p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5 w-5 text-teal-500" strokeWidth={1.8} />
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold text-navy-600">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500/75">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
