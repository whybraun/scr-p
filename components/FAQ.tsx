import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Can I cancel or change my booking?",
    answer: "[Your cancellation and change policy]",
  },
  {
    question: "How does the deposit work?",
    answer: "[How much, when it’s held and when it’s returned]",
  },
  {
    question: "What if I return the car late?",
    answer: "[Late return policy]",
  },
  {
    question: "Can you deliver the car to me?",
    answer: "[Delivery areas and fees]",
  },
  {
    question: "How much fuel should the car have when I return it?",
    answer: "[Fuel policy]",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="px-4 py-16 md:px-12 md:py-22 lg:py-28">
      <div className="mx-auto flex max-w-210 flex-col gap-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-brand-gold">FAQ</p>
          <h2 className="font-serif text-[32px] font-semibold md:text-[40px] lg:text-[46px]">
            Questions, answered
          </h2>
        </div>

        <div className="border-b border-white/15">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="group border-t border-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-lg font-bold md:text-[19px] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  size={24}
                  className="shrink-0 text-brand-gold transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 leading-relaxed text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}