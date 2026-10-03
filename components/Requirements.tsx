import { User, IdCard, CreditCard, ShieldCheck, type LucideIcon } from "lucide-react";

const requirements: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: User, title: "Minimum age", detail: "[Age requirement]" },
  { icon: IdCard, title: "Valid driver’s license", detail: "[License rules: US / international]" },
  { icon: CreditCard, title: "Card and deposit", detail: "[Deposit amount and accepted cards]" },
  { icon: ShieldCheck, title: "Insurance", detail: "[Insurance options]" },
];

export default function Requirements() {
  return (
    <section id="requirements" className="bg-brand-cream px-4 py-16 text-[#1A1A1A] md:px-12 md:py-22 lg:py-28">
      <div className="mx-auto flex max-w-300 flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-brand-gold-dark">
            Requirements
          </p>
          <h2 className="font-serif text-[32px] font-semibold md:text-[40px] lg:text-[46px]">
            What you need to rent a car
          </h2>
          <p className="max-w-110 text-[17px] leading-relaxed text-[#4A4A4A]">
            Questions about documents or the deposit? Email{" "}
            <a href="mailto:bookings@csrrent.com" className="font-bold text-brand-gold-dark underline">
              bookings@csrrent.com
            </a>{" "}
            or call{" "}
            <a href="tel:+18007427048" className="font-bold text-brand-gold-dark underline">
              (800) 742-7048
            </a>
            .
          </p>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {requirements.map(({ icon: Icon, title, detail }) => (
            <li
              key={title}
              className="flex items-center gap-4 rounded-[10px] border border-brand-line bg-white px-6 py-5"
            >
              <Icon size={24} className="shrink-0 text-brand-gold-dark" aria-hidden="true" />
              <div>
                <p className="text-[17px] font-bold">{title}</p>
                <p className="text-[15px] text-[#5A5A5A]">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}