import { services } from "../config/shopConfig";
import ServiceCard from "./ServiceCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container-shop">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-bold text-navy-600 sm:text-4xl">
            Digital & mobile services
          </h2>
          <p className="mt-3 text-navy-500/80">
            Everyday services handled quickly, right at your local shop.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 90}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
