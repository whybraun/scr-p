const times = Array.from({ length: 29 }, (_, i) => {
  const minutes = 7 * 60 + i * 30;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60 === 0 ? "00" : "30";
  const hours12 = hours > 12 ? hours - 12 : hours;
  const ampm = hours >= 12 ? "PM" : "AM";
  return `${hours12}:${mins} ${ampm}`;
});

const labelClass = "flex flex-col gap-2 text-sm font-bold";

const inputClass =
  "h-14 w-full rounded-[10px] border-[1.5px] border-[#D8D2C4] bg-white px-3.5 text-base font-medium text-[#1A1A1A] outline-none transition-colors focus:border-brand-gold";

const optionClass =
  "flex h-11 items-center justify-center rounded-lg text-[15px] font-bold text-[#5A5A5A] transition-colors peer-checked:bg-white peer-checked:text-[#1A1A1A] peer-checked:shadow-sm peer-focus-visible:ring-2 peer-focus-visible:ring-brand-gold";

export default function BookingForm() {
  return (
    <form
      id="book"
      className="flex w-full flex-col gap-4 rounded-[14px] border-t-4 border-brand-gold bg-white px-5 py-6 text-[#1A1A1A] shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:p-8 lg:w-125"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
        Book your car
      </p>
      <h2 className="font-serif text-[26px] font-semibold md:text-[30px]">
        Where and when?
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <label className={labelClass}>
          Pickup date
          <input type="date" name="pickupDate" required className={inputClass} />
        </label>
        <label className={labelClass}>
          Pickup time
          <select name="pickupTime" defaultValue="10:00 AM" className={inputClass}>
            {times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Return date
          <input type="date" name="returnDate" required className={inputClass} />
        </label>
        <label className={labelClass}>
          Return time
          <select name="returnTime" defaultValue="10:00 AM" className={inputClass}>
            {times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="grid grid-cols-2 gap-2 rounded-[10px] bg-brand-cream p-1.5">
        <legend className="sr-only">How do you want to get the car?</legend>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="pickupType"
            value="pickup"
            defaultChecked
            className="peer sr-only"
          />
          <span className={optionClass}>I&apos;ll pick it up</span>
        </label>
        <label className="cursor-pointer">
          <input type="radio" name="pickupType" value="delivery" className="peer sr-only" />
          <span className={optionClass}>Deliver to me</span>
        </label>
      </fieldset>

      <button
        type="submit"
        className="h-14 w-full rounded-[10px] bg-brand-black text-[17px] font-bold text-white transition-colors hover:bg-black/80"
      >
        Find available cars →
      </button>

      <p className="text-center text-sm text-[#5A5A5A]">No payment at this step</p>
    </form>
  );
}