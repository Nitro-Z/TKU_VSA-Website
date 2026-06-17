'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useT } from "./LanguageProvider";

export default function Navbar() {
  const { t } = useT();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      isActive(href)
        ? 'text-vsa-red dark:text-vsa-gold font-semibold'
        : 'text-zinc-600 dark:text-zinc-400 hover:text-vsa-blue dark:hover:text-zinc-100'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/system_images/cropped_circle_image.png"
            alt="VSA Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg leading-tight">
            TKU <span className="text-vsa-red">VSA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/about" className={linkClass('/about')}>{t.nav.about}</Link>
          <Link href="/events" className={linkClass('/events')}>{t.nav.events}</Link>
          <Link href="/faq" className={linkClass('/faq')}>{t.nav.faq}</Link>
          <a
            href="/#lien-he"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-vsa-blue dark:hover:text-zinc-100 transition-colors"
          >
            {t.nav.contact}
          </a>
          <Link
            href="/register"
            className="text-sm font-semibold text-white bg-vsa-red px-4 py-2 rounded-full hover:bg-vsa-darkred transition-colors"
          >
            {t.nav.register}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="/admin/login"
            className="p-2 rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-vsa-blue dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Quản trị viên"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <img
            src="/images/system_images/tku_logo.jpg"
            alt="Tamkang University"
            className="h-10 w-10 object-contain rounded-full"
          />
        </div>

        {/* Mobile: toggles + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-6 py-4 flex flex-col gap-4">
          <Link href="/about" className={linkClass('/about')} onClick={() => setMenuOpen(false)}>{t.nav.about}</Link>
          <Link href="/events" className={linkClass('/events')} onClick={() => setMenuOpen(false)}>{t.nav.events}</Link>
          <Link href="/faq" className={linkClass('/faq')} onClick={() => setMenuOpen(false)}>{t.nav.faq}</Link>
          <a
            href="/#lien-he"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-vsa-blue dark:hover:text-zinc-100 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.contact}
          </a>
          <Link
            href="/register"
            className="text-sm font-semibold text-white bg-vsa-red px-4 py-2.5 rounded-full hover:bg-vsa-darkred transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.register}
          </Link>
        </div>
      )}
    </nav>
  );
}
