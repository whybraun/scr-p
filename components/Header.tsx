"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

const navItems = [
  { href: "#fleet", label: "Fleet" },
  { href: "#how", label: "How it works" },
  { href: "#requirements", label: "Requirements" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/40 bg-brand-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-300 items-center justify-between px-4 py-4">
        <Link href="/" aria-label="Star Car Rental — home" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Star Car Rental"
            width={118}
            height={60}
            loading="eager"
            className="h-auto w-23 md:w-[118px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-brand-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href="tel:+18007427048" className="hidden items-center gap-2 text-[15px] font-bold md:flex">
            <Phone size={18} className="text-brand-gold" aria-hidden="true" />
            (800) 742-7048
          </a>
          <a
            href="#book"
            className="hidden rounded-lg bg-brand-gold px-5 py-3 text-[15px] font-bold text-brand-black transition-opacity hover:opacity-90 md:inline-flex"
          >
            Book now
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-brand-gold/20 px-4 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block border-b border-white/10 py-4 text-lg font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#book"
              onClick={closeMenu}
              className="rounded-lg bg-brand-gold py-4 text-center text-[17px] font-bold text-brand-black"
            >
              Book now
            </a>
            <a
              href="tel:+18007427048"
              className="flex items-center justify-center gap-2 rounded-lg border-[1.5px] border-white/40 py-4 text-[17px] font-bold"
            >
              <Phone size={18} className="text-brand-gold" aria-hidden="true" />
              (800) 742-7048
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}