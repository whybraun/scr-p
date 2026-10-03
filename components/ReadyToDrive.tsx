export default function ReadyToDrive() {
  return (
    <section id="contact" className="px-4 pb-16 md:px-12 md:pb-22 lg:pb-28">
      <div className="mx-auto flex max-w-300 flex-col gap-6 rounded-2xl bg-brand-gold p-7 text-brand-black md:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
        <div className="flex flex-col gap-2.5">
          <h2 className="font-serif text-[32px] font-semibold md:text-[40px]">
            Ready to drive?
          </h2>
          <p className="text-[17px]">[Pickup address], Houston, TX · [Hours]</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#book"
            className="rounded-lg bg-brand-black px-7 py-4 text-center text-[17px] font-bold text-white transition-colors hover:bg-black/80"
          >
            Book now →
          </a>
          <a
            href="tel:+18007427048"
            className="rounded-lg border-2 border-brand-black px-7 py-3.5 text-center text-[17px] font-bold transition-colors hover:bg-brand-black hover:text-white"
          >
            (800) 742-7048
          </a>
        </div>
      </div>
    </section>
  );
}