'use client';
import { useT } from './LanguageProvider';
import type { Lang } from '@/lib/i18n';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中' },
];

export default function LanguageToggle() {
  const { lang, setLang } = useT();

  return (
    <div className="flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 overflow-hidden text-xs font-semibold">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2.5 py-1 transition-colors duration-150 ${
            lang === code
              ? 'bg-vsa-red text-white'
              : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
