import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/terms", label: "Rental terms" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "mailto:bookings@csrrent.com", label: "bookings@csrrent.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gold/20 px-4 py-10 md:px-12">
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Star Car Rental — home">
            <Image src="/logo.png" alt="Star Car Rental" width={88} height={45} className="h-auto w-22" />
          </Link>
          <p className="text-sm text-white/60">© {year} Star Car Rental · Houston, TX</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white/75 transition-colors hover:text-brand-gold">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}