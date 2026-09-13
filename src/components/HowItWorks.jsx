const steps = [
  {
    number: "1",
    title: "Choose",
    text: "Browse the product or service you need on this page.",
  },
  {
    number: "2",
    title: "Contact",
    text: "Call or WhatsApp the shop to check price and availability.",
  },
  {
    number: "3",
    title: "Visit & get it done",
    text: "Visit the shop for your purchase or service — including ticket booking and money transfer.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-shop">
        <h2 className="font-display text-3xl font-bold text-navy-600 sm:text-4xl">How it works</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative rounded-2xl border border-navy-50 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-600 font-display text-base font-bold text-marigold-400">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-600">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500/75">{step.text}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-11 hidden h-px w-6 bg-navy-100 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
