"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/collective", label: "Collective" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-6 h-12 md:h-14">
        {/* Left: nav links (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-[0.3px] uppercase transition-colors duration-100 ${
                pathname === link.href
                  ? "text-blue"
                  : "text-black hover:text-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center: serif wordmark */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-playfair)] text-[22px] md:text-[26px] font-normal tracking-[0.5px]"
        >
          Artsy
        </Link>

        {/* Right: placeholder for future icons */}
        <div className="hidden md:block w-24" />

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[13px] tracking-[0.3px] uppercase ${
                  pathname === link.href ? "text-blue" : "text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
