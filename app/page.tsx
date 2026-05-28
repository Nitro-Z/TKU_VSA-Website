'use client';
import Image from "next/image";
import FadeIn from "./components/FadeIn";
import { useT } from "./components/LanguageProvider";

export default function Home() {
  const { t } = useT();
  const h = t.home;

  return (
    <div className="flex flex-col min-h-full font-sans">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center text-white py-32 px-6 overflow-hidden min-h-[420px]">
        <Image
          src="/images/system_images/tku_campus.jpg"
          alt="Campus Tamkang University"
          fill
          className="object-cover"
          style={{ objectPosition: "70% 110%" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-1 absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-vsa-red/20 blur-3xl" />
          <div className="orb-2 absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-vsa-gold/20 blur-3xl" />
          <div className="orb-3 absolute top-1/2 left-2/3 w-48 h-48 rounded-full bg-blue-400/15 blur-2xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold mb-2 animate-slide-up drop-shadow-lg text-white">
            {h.hero_title}
          </h1>
          <p className="text-0.875g max-w-xl text-blue-100 animate-slide-up delay-250 drop-shadow">
            {h.hero_subtitle}
          </p>
          <div className="animate-slide-up delay-400 mt-2 flex flex-wrap justify-center gap-3">
            <a
              href="/register"
              className="btn-glow inline-block bg-vsa-red text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-vsa-darkred hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {h.cta_register}
            </a>
            <a
              href="#lien-he"
              className="inline-block border-2 border-white/70 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {h.cta_contact}
            </a>
          </div>
          <div className="animate-bounce-slow mt-4 text-white/60">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="block w-full h-12">
            <path d="M0,26 C240,52 480,0 720,26 C960,52 1200,0 1440,26 L1440,52 L0,52 Z" className="fill-white dark:fill-[#0f172a]" />
          </svg>
        </div>
      </section>

      {/* Giới thiệu */}
      <FadeIn>
        <section className="py-16 px-6 max-w-3xl mx-auto w-full">
          <h2 className="text-2xl font-semibold mb-4 text-vsa-white">{h.who_title}</h2>
          <p className="text-zinc-600 dark:text-zinc-100 leading-8">
            {h.who_body}
          </p>
        </section>
      </FadeIn>

      {/* Sứ mệnh */}
      <section className="bg-vsa-blue text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-semibold mb-10 text-center">{h.mission_title}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {h.missions.map((m, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-vsa-gold">
                    <MissionIcon index={i} />
                  </div>
                  <h3 className="font-semibold text-vsa-gold">{m.title}</h3>
                  <p className="text-blue-200 text-sm leading-6">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Giá trị cốt lõi + Tầm nhìn */}
      <FadeIn>
        <section className="py-16 px-6 max-w-3xl mx-auto w-full">
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-vsa-white">{h.values_title}</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {h.values.map((v) => (
                  <span
                    key={v}
                    className="px-6 py-2.5 rounded-full border-2 border-vsa-red text-vsa-red font-semibold text-sm tracking-wide"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl p-8 border-l-4 border-vsa-gold">
              <h2 className="text-lg font-semibold mb-3 text-vsa-white">{h.vision_title}</h2>
              <p className="text-zinc-600 dark:text-zinc-100 leading-8 italic">
                "{h.vision_body}"
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Dịch vụ / Hỗ trợ */}
      <section className="bg-zinc-50 dark:bg-vsa-blue py-16 px-6">
        <div className="max-w-3xl mx-auto w-full">
          <FadeIn>
            <h2 className="text-2xl font-semibold mb-2 text-vsa-white">{h.support_title}</h2>
            <p className="text-zinc-500 dark:text-zinc-100 text-sm mb-8">{h.support_subtitle}</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {h.support_items.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700 transition-all duration-200 hover:-translate-y-2 hover:shadow-md cursor-default h-full">
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900 text-vsa-red flex items-center justify-center mb-3">
                    <SupportIcon index={i} />
                  </div>
                  <h3 className="font-semibold text-vsa-black dark:text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-100 text-sm leading-6">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ảnh nhóm */}
      <FadeIn>
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-vsa-white text-center">{h.community_title}</h2>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/events_galleries/cafe_culture_1.jpg"
                alt="Thành viên TKU VSA tại sự kiện"
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="text-center text-zinc-400 mt-3 text-sm italic">{h.community_caption}</p>
          </div>
        </section>
      </FadeIn>

      {/* Sự kiện */}
      <FadeIn>
        <section className="py-16 px-6 max-w-3xl mx-auto w-full">
          <h2 className="text-2xl font-semibold mb-4 text-vsa-white">{h.events_title}</h2>
          <p className="text-zinc-400 italic">{h.events_empty}</p>
        </section>
      </FadeIn>

      {/* Liên hệ */}
      <section id="lien-he" className="bg-vsa-blue text-white py-16 px-6">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-2xl font-semibold mb-6">{h.contact_title}</h2>
          <div className="flex flex-col gap-4 text-blue-200">
            <a
              href="https://www.instagram.com/tku_vsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @tku_vsa
            </a>
            <a
              href="https://www.facebook.com/vsa.tamkang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              vsa.tamkang
            </a>
            <a
              href="mailto:tku.vsa2026@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              tku.vsa2026@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm leading-6">
                No.151, Yingzhuan Rd., Tamsui Dist.,<br />
                New Taipei City 251301, Taiwan<br />
                <span className="text-blue-300">251301 新北市淡水區英專路151號</span>
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function MissionIcon({ index }: { index: number }) {
  if (index === 0) return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
  if (index === 1) return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SupportIcon({ index }: { index: number }) {
  if (index === 0) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
    </svg>
  );
  if (index === 1) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
  if (index === 2) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}
