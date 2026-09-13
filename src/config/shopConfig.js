export const shopInfo = {
  shopName: "Mourya Mobile Shop",
  tagline: "Mobile Accessories & Digital Services",
  phone: "9104704863",
  whatsapp: "919104704863",
  address: "Shop No. 2, Near KBD High School, Sarigam",
  area: "Shop No. 2, Near KBD High School, Sarigam",
  city: "Vapi",
  state: "Gujarat",
  openingHours: "Mon-San: 10:00 AM - 9:00 PM",
  yearsInBusiness: "10 + Years",
  googleMapsUrl: "https://maps.app.goo.gl/ARENdqsVcD8EUhUj8",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1690782643363!2d72.85795617550882!3d20.293267512632756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d3cf2813821f%3A0x53846539f462d548!2sMourya%20Mobile!5e0!3m2!1sen!2sin!4v1789320243975!5m2!1sen!2sin",
};

// ----------------------------------------------------------------------------
// PRODUCTS — shown in the main "Mobile Accessories" grid.
// Add / remove / edit items freely. `icon` refers to a key in
// src/utils/icons.js (a small curated set of category icons).
// ----------------------------------------------------------------------------
export const products = [
  {
    id: "mobile-covers",
    name: "Mobile Covers",
    description:
      "Stylish, protective covers for all popular smartphone models.",
    icon: "cover",
  },
  {
    id: "screen-guards",
    name: "Screen Guards",
    description:
      "Tempered glass & screen protectors for scratch-free displays.",
    icon: "shield",
  },
  {
    id: "earphones",
    name: "Earphones",
    description: "Wired earphones with clear sound for calls and music.",
    icon: "earphone",
  },
  {
    id: "tws-earbuds",
    name: "TWS Earbuds",
    description:
      "True wireless earbuds for a clutter-free listening experience.",
    icon: "earbuds",
  },
  {
    id: "chargers",
    name: "Chargers",
    description: "Fast chargers compatible with all major phone brands.",
    icon: "charger",
  },
  {
    id: "charging-cables",
    name: "Charging Cables",
    description: "Durable USB-C, Micro-USB and Lightning charging cables.",
    icon: "cable",
  },
  {
    id: "power-banks",
    name: "Power Banks",
    description: "Portable power banks to keep your devices charged on the go.",
    icon: "powerbank",
  },
  {
    id: "bluetooth-speakers",
    name: "Bluetooth Speakers",
    description: "Compact speakers with rich sound for home or travel.",
    icon: "speaker",
  },
  {
    id: "mobile-holders",
    name: "Mobile Holders",
    description: "Desk, bike and car mounts to hold your phone securely.",
    icon: "holder",
  },
  {
    id: "memory-cards",
    name: "Memory Cards",
    description: "Reliable memory cards for extra storage on your device.",
    icon: "memory",
  },
  {
    id: "otg-adapters",
    name: "OTG & Adapters",
    description:
      "OTG cables and adapters for connecting accessories to your phone.",
    icon: "adapter",
  },
  {
    id: "other-accessories",
    name: "Other Accessories",
    description: "Pop sockets, stylus pens, cleaning kits and more.",
    icon: "other",
  },
];

// ----------------------------------------------------------------------------
// FEATURED PRODUCTS — shown in the horizontal "popular right now" strip.
// Reuses the same shape as `products`; keep this list short (5-8 items).
// ----------------------------------------------------------------------------
export const featuredProducts = [
  {
    id: "featured-covers",
    name: "Premium Mobile Covers",
    feature: "Shockproof & slim-fit designs",
    icon: "cover",
  },
  {
    id: "featured-guard",
    name: "9D / 11D Screen Guards",
    feature: "Edge-to-edge tempered glass",
    icon: "shield",
  },
  {
    id: "featured-charger",
    name: "Fast Chargers",
    feature: "Quick charge, all-brand support",
    icon: "charger",
  },
  {
    id: "featured-cable",
    name: "Type-C Cables",
    feature: "Braided, long-lasting build",
    icon: "cable",
  },
  {
    id: "featured-tws",
    name: "TWS Earbuds",
    feature: "Touch controls, long battery life",
    icon: "earbuds",
  },
  {
    id: "featured-powerbank",
    name: "Power Banks",
    feature: "10000mAh & 20000mAh options",
    icon: "powerbank",
  },
  {
    id: "featured-speaker",
    name: "Bluetooth Speakers",
    feature: "Deep bass, portable size",
    icon: "speaker",
  },
];

// ----------------------------------------------------------------------------
// SERVICES — shown in the "Digital & Mobile Services" section.
// `whatsappMessage` is the pre-filled text used for that service's button.
// ----------------------------------------------------------------------------
export const services = [
  {
    id: "sim-activation",
    name: "SIM Activation",
    description: "New SIM activation and SIM-related assistance.",
    icon: "sim",
    whatsappMessage: "Hi, I want information about SIM activation.",
  },
  {
    id: "mobile-recharge",
    name: "Mobile Recharge",
    description: "Recharge assistance for major mobile networks.",
    icon: "recharge",
    whatsappMessage: "Hi, I want to do a mobile recharge.",
  },
  {
    id: "money-transfer",
    name: "Money Transfer",
    description: "Domestic money transfer service.",
    icon: "transfer",
    whatsappMessage: "Hi, I want information about money transfer service.",
  },
  {
    id: "ticket-booking",
    name: "Ticket Booking",
    description: "Assistance with bus, train and flight ticket booking.",
    icon: "ticket",
    whatsappMessage: "Hi, I want to enquire about ticket booking.",
  },
  {
    id: "online-services",
    name: "Online Services",
    description: "Help with everyday online and digital services.",
    icon: "online",
    whatsappMessage: "Hi, I want to enquire about your online services.",
  },
  {
    id: "mobile-assistance",
    name: "Mobile Assistance",
    description:
      "Basic smartphone setup, accessory installation and related help.",
    icon: "assist",
    whatsappMessage: "Hi, I want help with basic mobile setup / assistance.",
  },
];
