import CarCard from "./CarCard";
import { cars } from "@/data/cars";

const filters = ["All vehicles", "Sedan", "SUV", "Sport", "RV"];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-brand-cream px-4 py-16 text-[#1A1A1A] md:px-12 md:py-22 lg:py-28">
      <div className="mx-auto flex max-w-300 flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-brand-gold-dark">
            Our fleet
          </p>
          <h2 className="font-serif text-[32px] font-semibold md:text-[40px] lg:text-[46px]">
            Choose your vehicle
          </h2>
          <p className="text-[17px] text-[#4A4A4A]">
            Prices are per day. Taxes and fees are shown before you pay.
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={
                  index === 0
                    ? "rounded-full bg-brand-black px-5 py-3 text-[15px] font-bold text-white"
                    : "rounded-full border-[1.5px] border-[#CFC7B5] bg-white px-5 py-3 text-[15px] font-medium"
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#fleet"
            className="rounded-lg border-[1.5px] border-brand-black px-7 py-4 text-[17px] font-bold transition-colors hover:bg-brand-black hover:text-white"
          >
            See all vehicles
          </a>
        </div>
      </div>
    </section>
  );
}