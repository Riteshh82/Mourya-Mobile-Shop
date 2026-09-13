# Mourya Mobile Shop — Website

A fast, mobile-first single-page website for a local mobile phone,
accessories & digital services shop. Built with **React + Vite + Tailwind CSS**.

Everything you'll ever need to edit — shop details, products, services —
lives in **one file**: `src/config/shopConfig.js`.



This single object feeds the navbar, hero, about, contact, footer and the
structured data (SEO) in `index.html` — you only need to change it in
one place. Note: `index.html`'s `<title>`, meta description and JSON-LD
block use placeholder text too — update those by hand once, since they're
static HTML read before React loads (needed for SEO crawlers).


## Adding / editing products

Still in `src/config/shopConfig.js`, edit the `products` array:

```js
export const products = [
  {
    id: "mobile-covers", // unique, no spaces
    name: "Mobile Covers",
    description:
      "Stylish, protective covers for all popular smartphone models.",
    icon: "cover", // see icon list below
  },
  // ...add or remove items freely
];
```

To feature a product in the horizontally-scrolling "Popular right now"
strip, add it to the `featuredProducts` array the same way (with a
`feature` line instead of `description`).

**Available icon keys:** `cover`, `shield`, `earphone`, `earbuds`, `charger`,
`cable`, `powerbank`, `speaker`, `holder`, `memory`, `adapter`, `other`,
`sim`, `recharge`, `transfer`, `ticket`, `online`, `assist`.
To add a new icon, pick one from [lucide.dev/icons](https://lucide.dev/icons),
import it in `src/utils/icons.jsx`, and add it to `iconMap`.

No prices are shown anywhere — cards always display **"Ask Price"** and a
WhatsApp enquiry button, per the shop's policy of quoting prices directly.

## 7. Adding product images

The current build uses lightweight icon illustrations instead of photos, so
the site loads fast even without any images supplied. To use real photos instead:

1. Add your image files to `src/assets/` (create the folder), e.g. `src/assets/mobile-cover.jpg`.
2. In `ProductCard.jsx`, replace the icon block with an `<img>` tag, e.g.:

```jsx
<img
  src={image}
  alt={name}
  loading="lazy"
  className="mb-4 h-32 w-full rounded-xl object-cover"
/>
```

3. Import each image at the top of `shopConfig.js` and add an `image` field to
   the relevant product objects, then pass it through in `Products.jsx`.

Keep images compressed (under ~150KB each, JPEG or WebP) to preserve
loading speed.# Mourya-Mobile-Shop
