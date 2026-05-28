'use client';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useT } from "./LanguageProvider";

export default function Navbar() {
  const { t } = useT();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + tên */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/system_images/cropped_circle_image.png"
            alt="VSA Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-zinc-800 dark:text-zinc-100 text-lg leading-tight">
            TKU <span className="text-red-700">VSA</span>
          </span>
        </Link>

        {/* Nav links + toggles + logo */}
        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-vsa-blue dark:hover:text-zinc-100 transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-vsa-blue dark:hover:text-zinc-100 transition-colors"
          >
            {t.nav.events}
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-vsa-blue dark:hover:text-zinc-100 transition-colors"
          >
            {t.nav.faq}
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-full hover:bg-red-800 transition-colors"
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
      </div>
    </nav>
  );
}
