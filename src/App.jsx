import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import Services from "./components/Services.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <FeaturedProducts />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
