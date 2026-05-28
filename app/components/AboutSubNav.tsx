'use client';
import Link from "next/link";
import { useT } from "./LanguageProvider";

export default function AboutSubNav({ active }: { active: "about" | "team" }) {
  const { t } = useT();
  const tabs = [
    { label: t.about.subnav_intro, href: "/about", key: "about" },
    { label: t.about.subnav_team, href: "/about/team", key: "team" },
  ];
  return (
    <div className="sticky top-16 z-40 bg-white dark:bg-slate-900 border-b border-zinc-100 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 flex gap-1">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`px-4 py-3.5 text-sm font-medium border-b-2 transition-colors duration-150 ${
              active === tab.key
                ? "border-vsa-red text-vsa-red"
                : "border-transparent text-zinc-500 dark:text-zinc-400 hover:text-vsa-blue dark:hover:text-zinc-100"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
