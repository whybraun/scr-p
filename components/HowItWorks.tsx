const steps = [
  {
    number: "01",
    title: "Choose dates and a car",
    text: "See real availability and the full price before you book.",
  },
  {
    number: "02",
    title: "Book and verify online",
    text: "Upload your driver’s license, sign the agreement and pay securely.",
  },
  {
    number: "03",
    title: "Pick up and drive",
    text: "Get the keys at our location or have the car delivered to you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-4 py-16 md:px-12 md:py-22 lg:py-28">
      <div className="mx-auto flex max-w-300 flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-brand-gold">
            How it works
          </p>
          <h2 className="font-serif text-[32px] font-semibold md:text-[40px] lg:text-[46px]">
            Three steps to the road
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-2.5 border-t border-brand-gold/50 pt-7">
              <p className="font-serif text-5xl font-semibold text-brand-gold">{step.number}</p>
              <h3 className="text-[21px] font-bold">{step.title}</h3>
              <p className="leading-relaxed text-white/70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}