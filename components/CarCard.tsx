import type { ReactNode } from "react";
import { Users, Cog, Luggage, Leaf, Zap, type LucideIcon } from "lucide-react";
import type { Car } from "@/data/cars";

export default function CarCard({ car }: { car: Car }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[14px] border border-brand-line bg-white text-[#1A1A1A]">
      <div className="relative flex aspect-16/10 items-center justify-center bg-[#1C1C1C] text-sm text-white/50">
        [Car photo]
        {car.fuel === "Hybrid" && <FuelBadge icon={Leaf} label="Hybrid" />}
        {car.fuel === "Electric" && <FuelBadge icon={Zap} label="Electric" />}
      </div>

      <div className="flex flex-1 flex-col gap-3.5 px-6 pt-5.5 pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold-dark">
          {car.type}
        </p>
        <h3 className="font-serif text-2xl font-semibold">{car.name}</h3>

        <div className="flex flex-wrap gap-2 text-sm text-[#3A3A3A]">
          <Spec icon={Users}>{car.seats ?? "[N]"} seats</Spec>
          <Spec icon={Cog}>{car.transmission === "Automatic" ? "Auto" : "Manual"}</Spec>
          <Spec icon={Luggage}>{car.bags ?? "[N]"} bags</Spec>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#EEE9DF] pt-4">
          <p>
            <span className="font-serif text-[28px] font-bold">${car.pricePerDay ?? "[XX]"}</span>
            <span className="text-[15px] text-[#5A5A5A]"> / day</span>
          </p>
          <a
            href="#top"
            className="rounded-lg bg-brand-gold px-5 py-3 text-[15px] font-bold text-brand-black transition-opacity hover:opacity-90"
          >
            Book
          </a>
        </div>
      </div>
    </article>
  );
}

function Spec({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-cream px-2.5 py-1.5">
      <Icon size={15} className="text-brand-gold-dark" aria-hidden="true" />
      {children}
    </span>
  );
}

function FuelBadge({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-700">
      <Icon size={14} aria-hidden="true" />
      {label}
    </span>
  );
}