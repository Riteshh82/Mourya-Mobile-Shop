import { products } from "../config/shopConfig";
import ProductCard from "./ProductCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-20">
      <div className="container-shop">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-bold text-navy-600 sm:text-4xl">
            Mobile accessories
          </h2>
          <p className="mt-3 text-navy-500/80">
            Everything you need for your smartphone in one place.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 80}>
              <ProductCard {...product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
