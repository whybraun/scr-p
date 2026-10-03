import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section id="top" className="px-4 pt-10 pb-14 md:px-12 md:pt-18 md:pb-22 lg:pt-24 lg:pb-28">
      <div className="mx-auto flex max-w-300 flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-brand-gold">
            Car rental · Houston, TX
          </p>

          <h1 className="font-serif text-[40px] font-semibold leading-[1.05] md:text-[54px] lg:text-[64px]">
            Reliable cars.
            <br />
            Flexible rentals.
          </h1>

          <div className="h-1 w-24 bg-brand-gold" />

          <p className="text-[17px] leading-relaxed text-white/70 md:text-[19px]">
            Pick your dates, choose a car and book online in a minute. Pickup in Houston.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#fleet"
              className="rounded-lg bg-brand-gold px-7 py-4 text-[17px] font-bold text-brand-black transition-opacity hover:opacity-90"
            >
              See our fleet →
            </a>
            <a
              href="tel:+18007427048"
              className="rounded-lg border-[1.5px] border-white/40 px-7 py-4 text-[17px] font-bold transition-colors hover:border-white"
            >
              Call us
            </a>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}