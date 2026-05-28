'use client';
import FadeIn from "../components/FadeIn";
import { useT } from "../components/LanguageProvider";

export default function FAQPage() {
  const { t } = useT();
  const f = t.faq;

  return (
    <div className="flex flex-col min-h-full font-sans">

      <section className="bg-vsa-blue text-white py-16 px-6 text-center">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-3">{f.hero_title}</h1>
          <p className="text-blue-200 text-sm max-w-xl mx-auto">
            {f.hero_subtitle}
          </p>
        </FadeIn>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-14 w-full">
        {f.sections.map((section, si) => (
          <FadeIn key={si} delay={si * 80}>
            <div>
              <h2 className="text-lg font-bold text-vsa-white mb-5 pb-2 border-b border-zinc-100">
                {section.category}
              </h2>
              <div className="flex flex-col gap-3">
                {section.items.map((item, ii) => (
                  <details
                    key={ii}
                    className="group bg-white border border-zinc-100 rounded-xl shadow-sm overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-zinc-800 text-sm hover:bg-zinc-50 transition-colors">
                      {item.q}
                      <svg
                        className="w-4 h-4 shrink-0 text-zinc-400 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-zinc-500 text-sm leading-7 border-t border-zinc-50">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn>
          <p className="text-zinc-400 text-sm text-center leading-7">
            {f.contact_prompt}{" "}
            <a
              href="https://www.facebook.com/vsa.tamkang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vsa-blue underline hover:text-vsa-darkred transition-colors"
            >
              {f.contact_link}
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
