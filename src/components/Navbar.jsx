import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { shopInfo } from "../config/shopConfig";
import { buildWhatsAppLink } from "../utils/whatsapp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = buildWhatsAppLink(
    "Hi, I have a query about your products/services."
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "bg-paper/95 shadow-md backdrop-blur" : "bg-paper/90 backdrop-blur"
      }`}
    >
      <nav className="container-shop flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold text-navy-600">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-600 text-marigold-400">
            {shopInfo.shopName?.charAt(0) || "S"}
          </span>
          <span className="hidden sm:inline">{shopInfo.shopName}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-navy-500 transition-colors hover:text-teal-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-navy-600 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-50 bg-paper md:hidden">
          <ul className="container-shop flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-navy-600 hover:bg-navy-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
