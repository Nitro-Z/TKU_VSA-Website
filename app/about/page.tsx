'use client';
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import AboutSubNav from "../components/AboutSubNav";
import { useT } from "../components/LanguageProvider";

export default function AboutPage() {
  const { t } = useT();
  const a = t.about;

  return (
    <div className="flex flex-col min-h-full font-sans">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center text-white py-28 px-6 overflow-hidden min-h-[540px]">
        <Image
          src="/images/system_images/tku_campus.jpg"
          alt="Campus Tamkang University"
          fill
          className="object-cover"
          style={{ objectPosition: "65% 90%" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-1 absolute -top-10 -left-10 w-64 h-64 rounded-full bg-vsa-red/25 blur-3xl" />
          <div className="orb-2 absolute -bottom-8 right-0 w-56 h-56 rounded-full bg-vsa-gold/20 blur-3xl" />
          <div className="orb-3 absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-blue-400/15 blur-2xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold drop-shadow-lg animate-slide-up text-white max-w-4xl leading-tight">
            {a.hero_title}
          </h1>
          <p className="text-white max-w-2xl text-lg leading-8 animate-slide-up delay-250 font-medium">
            {a.hero_subtitle}
          </p>
          <div className="animate-bounce-slow mt-2 text-white/50 animate-slide-up delay-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      <AboutSubNav active="about" />

      {/* Giới thiệu */}
      <FadeIn>
        <section className="py-16 px-6 max-w-3xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-vsa-white">{a.who_title}</h2>
              <p className="text-zinc-600 dark:text-zinc-100 leading-8 mb-4">
                <strong className="text-vsa-darkred">TKU VSA</strong> {a.who_body1.replace('TKU VSA', '').trimStart()}
              </p>
              <p className="text-zinc-600 dark:text-zinc-100 leading-8">
                {a.who_body2}
              </p>
            </div>
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-md shrink-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/system_images/cropped_circle_image.png"
                alt="Logo TKU VSA"
                fill
                className="object-contain p-4 bg-vsa-blue"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Sứ mệnh */}
      <section className="bg-vsa-blue text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-semibold mb-10 text-center">{a.mission_title}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {a.missions.map((m, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-vsa-gold transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:shadow-lg">
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

      {/* Tầm nhìn & Giá trị */}
      <FadeIn>
        <section className="py-16 px-6 max-w-3xl mx-auto w-full">
          <div className="flex flex-col gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl p-8 border-l-4 border-vsa-gold transition-all duration-300 hover:shadow-md hover:border-vsa-red">
              <h2 className="text-lg font-semibold mb-3 text-vsa-white">{a.vision_title}</h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-8 italic">
                "{a.vision_body}"
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4 text-vsa-white">{a.values_title}</h2>
              <div className="flex flex-wrap gap-4">
                {a.values.map((v) => (
                  <span
                    key={v}
                    className="px-6 py-2.5 rounded-full border-2 border-vsa-red text-vsa-red font-semibold text-sm tracking-wide cursor-default transition-all duration-200 hover:bg-vsa-red hover:text-white hover:scale-105 hover:shadow-md"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Ảnh nhóm */}
      <FadeIn>
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-vsa-white text-center">{a.community_title}</h2>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/events_galleries/cafe_culture_1.jpg"
                alt="Thành viên TKU VSA"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-center text-zinc-400 mt-3 text-sm italic">
              {a.community_caption}
            </p>
          </div>
        </section>
      </FadeIn>

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
