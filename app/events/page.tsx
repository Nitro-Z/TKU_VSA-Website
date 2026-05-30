'use client';
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import { useT } from "../components/LanguageProvider";
import type { EventItem } from "@/lib/i18n";

function EventCard({ event, optionalLabel, ongoingLabel }: { event: EventItem; optionalLabel: string; ongoingLabel: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-zinc-800 leading-snug">{event.title}</h3>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {event.optional && (
            <span className="text-xs bg-zinc-100 text-zinc-400 px-2 py-0.5 rounded-full">{optionalLabel}</span>
          )}
          {event.ongoing && (
            <span className="text-xs bg-vsa-blue/10 text-vsa-blue px-2 py-0.5 rounded-full">{ongoingLabel}</span>
          )}
        </div>
      </div>
      <p className="text-xs font-medium text-vsa-red mb-2">{event.date}</p>
      <p className="text-sm text-zinc-500 leading-6">{event.desc}</p>
    </div>
  );
}

export default function EventsPage() {
  const { t } = useT();
  const e = t.events;

  return (
    <div className="flex flex-col min-h-full font-sans">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center text-white py-24 px-6 overflow-hidden min-h-[280px]">
        <Image
          src="/images/system_images/tku_campus.jpg"
          alt="Campus Tamkang University"
          fill
          className="object-cover"
          style={{ objectPosition: "65% 70%" }}
          priority
        />
        <div className="absolute inset-0 bg-vsa-blue/80" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold drop-shadow-lg animate-slide-up">{e.hero_title}</h1>
          <p className="text-blue-200 max-w-lg text-sm leading-7 animate-slide-up delay-250">
            {e.hero_subtitle}
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6 pt-10 w-full">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 text-sm text-amber-700 flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {e.disclaimer}
          </div>
        </div>
      </FadeIn>

      {/* Kỳ 1 */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-vsa-red" />
              <h2 className="text-xl font-bold text-vsa-white">{e.sem1_title}</h2>
              <span className="text-xs text-zinc-400 font-medium">{e.sem1_dates}</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {e.ky1.map((event, i) => (
              <FadeIn key={i} delay={i * 60}>
                <EventCard event={event} optionalLabel={e.optional_label} ongoingLabel={e.ongoing_label} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Kỳ 2 */}
      <section className="py-12 px-6 bg-zinc-50 dark:bg-vsa-blue">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-vsa-red" />
              <h2 className="text-xl font-bold text-vsa-white">{e.sem2_title}</h2>
              <span className="text-xs text-zinc-400 font-medium">{e.sem2_dates}</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {e.ky2.map((event, i) => (
              <FadeIn key={i} delay={i * 60}>
                <EventCard event={event} optionalLabel={e.optional_label} ongoingLabel={e.ongoing_label} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-semibold mb-8 text-vsa-white">{e.gallery_title}</h2>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { src: '/images/events_galleries/cafe_culture_1.jpg', alt: 'Cafe Culture 1' },
                { src: '/images/events_galleries/cafe_culture_2.jpg', alt: 'Cafe Culture 2' },
                { src: '/images/events_galleries/yangmingshan_1.JPG', alt: 'Yangmingshan 1' },
                { src: '/images/events_galleries/yangmingshan_2.JPG', alt: 'Yangmingshan 2' },
                { src: '/images/events_galleries/keelung_shifen_1.JPG', alt: 'Keelung Shifen 1' },
                { src: '/images/events_galleries/keelung_shifen_2.JPG', alt: 'Keelung Shifen 2' },
              ].map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
