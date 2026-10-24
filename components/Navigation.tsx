"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    return isActive ? "text-brand-gold font-bold" : "text-brand-white hover:text-brand-gold";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    return `block py-2 ${isActive ? "text-brand-gold font-bold" : "text-brand-white hover:text-brand-gold"}`;
  };

  return (
    <nav className="bg-brand-black border-b border-brand-gold/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-28">

          <Link href="/">
            <Image
              src="/images/2.svg"
              alt="FIX & BLITZ Logo"
              width={450}
              height={570}
              className="h-24 w-auto"
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className={getLinkClass("/")}>Startseite</Link>
            <Link href="/galerie" className={getLinkClass("/galerie")}>Galerie</Link>
            <Link href="/bewertungen" className={getLinkClass("/bewertungen")}>Bewertungen</Link>
            <Link href="/kontakt" className={getLinkClass("/kontakt")}>Kontakt</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+4915781513109"
              className="hidden md:block bg-brand-gold text-brand-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400">
              Jetzt anrufen
            </a>
          </div>

          <div className="flex items-center md:hidden gap-4">
            <button
              className="text-brand-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className={getMobileLinkClass("/")}>Startseite</Link>
            <Link href="/galerie" className={getMobileLinkClass("/galerie")}>Galerie</Link>
            <Link href="/bewertungen" className={getMobileLinkClass("/bewertungen")}>Bewertungen</Link>
            <Link href="/kontakt" className={getMobileLinkClass("/kontakt")}>Kontakt</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
