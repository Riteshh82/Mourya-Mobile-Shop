import { Clock, MapPin, Phone } from "lucide-react";
import { shopInfo } from "../config/shopConfig";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container-shop grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy-600 sm:text-4xl">
            Your local mobile & digital service shop
          </h2>
          <p className="mt-4 leading-relaxed text-navy-500/80">
            From mobile accessories to SIM activation, money transfer and
            ticket booking, we provide convenient everyday mobile and digital
            services under one roof.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 ring-1 ring-navy-50">
            <p className="font-display text-2xl font-bold text-teal-500">{shopInfo.yearsInBusiness}</p>
            <p className="mt-1 text-sm text-navy-500/75">in business</p>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-navy-50">
            <MapPin className="h-5 w-5 text-teal-500" />
            <p className="mt-2 text-sm font-semibold text-navy-600">{shopInfo.area}</p>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-navy-50">
            <Phone className="h-5 w-5 text-teal-500" />
            <p className="mt-2 text-sm font-semibold text-navy-600">{shopInfo.phone}</p>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-navy-50">
            <Clock className="h-5 w-5 text-teal-500" />
            <p className="mt-2 text-sm font-semibold text-navy-600">{shopInfo.openingHours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
