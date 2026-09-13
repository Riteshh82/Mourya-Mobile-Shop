import { ShieldCheck, Tag, Zap, Layers, Smile, MapPin } from "lucide-react";

const features = [
  { icon: MapPin, title: "Trusted Local Shop", text: "A familiar shop in your neighbourhood, not a faceless website." },
  { icon: ShieldCheck, title: "Genuine & Quality Accessories", text: "We stock accessories chosen for everyday reliability." },
  { icon: Tag, title: "Competitive Prices", text: "Fair pricing on every product and service we offer." },
  { icon: Zap, title: "Quick Service", text: "Walk in or WhatsApp us — most requests are handled the same day." },
  { icon: Layers, title: "Multiple Services Under One Roof", text: "Accessories, SIM, recharge, transfer and tickets — one visit." },
  { icon: Smile, title: "Friendly Customer Support", text: "Our team is happy to help you pick the right product or service." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-teal-50/60 py-16 sm:py-20">
      <div className="container-shop">
        <h2 className="font-display text-3xl font-bold text-navy-600 sm:text-4xl">
          Why customers choose us
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-5 ring-1 ring-navy-50">
              <Icon className="h-6 w-6 text-teal-500" strokeWidth={1.8} />
              <h3 className="mt-3 font-display text-sm font-semibold text-navy-600">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500/75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
