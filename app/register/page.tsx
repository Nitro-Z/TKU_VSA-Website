"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import FadeIn from "../components/FadeIn";
import { useT } from "../components/LanguageProvider";

type FormState = "idle" | "loading" | "success" | "error";

const BENEFIT_ICONS = [
  <svg key={0} className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key={1} className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key={2} className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg key={3} className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key={4} className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>,
  <svg key={5} className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
  </svg>,
];

export default function RegisterPage() {
  const { t } = useT();
  const r = t.register;

  const [form, setForm] = useState({
    full_name: "",
    dob: "",
    student_id: "",
    major: "",
    email: "",
    phone: "",
    year_of_study: "",
    social: "",
    note: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [registeredAt, setRegisteredAt] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const yearNum = r.year_options.indexOf(form.year_of_study) + 1;

    const { error } = await supabase.from("members").insert([
      {
        full_name: form.full_name,
        dob: form.dob || null,
        student_id: form.student_id || null,
        major: form.major || null,
        email: form.email || null,
        phone: form.phone || null,
        year_of_study: yearNum || null,
        social: form.social || null,
        note: form.note || null,
      },
    ]);

    if (error) {
      setState("error");
      setErrorMsg(error.message || r.error_default);
      console.error("Supabase insert error:", error);
    } else {
      setRegisteredAt(new Date().toLocaleDateString('vi-VN'));
      setState("success");
    }
  }

  if (state === "success") {
    return (
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md w-full">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">{r.success_title}</h1>
          <p className="text-zinc-500 leading-7 whitespace-pre-line mb-8">{r.success_body}</p>

          {/* Thông tin đăng ký */}
          <div className="bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl p-5 text-left border border-zinc-100 dark:border-zinc-700 mb-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide shrink-0">{r.success_name_label}</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 text-right">{form.full_name}</span>
              </div>
              <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide shrink-0">{r.success_id_label}</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 text-right">{form.student_id || '—'}</span>
              </div>
              <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide shrink-0">{r.success_date_label}</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 text-right">{registeredAt}</span>
              </div>
            </div>
          </div>

          <a
            href="/"
            className="inline-block bg-red-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-800 transition-colors"
          >
            {r.back_home}
          </a>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Form đăng ký */}
      <main id="register-form" className="flex-1 px-6 py-16">
        <div className="max-w-lg mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">{r.title}</h1>
            <p className="text-zinc-500 leading-7">{r.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                {r.name_label} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                placeholder={r.name_placeholder}
                className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                {r.dob_label} <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                className={`w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition ${form.dob ? 'text-zinc-800' : 'text-zinc-400'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                {r.id_label} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="student_id"
                value={form.student_id}
                onChange={handleChange}
                required
                placeholder="41XXXXXXX"
                className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                {r.major_label} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="major"
                value={form.major}
                onChange={handleChange}
                required
                placeholder={r.major_placeholder}
                className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  {r.email_label} <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  {r.phone_label} <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+886 9XX XXX XXX"
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                {r.year_label} <span className="text-red-600">*</span>
              </label>
              <select
                name="year_of_study"
                value={form.year_of_study}
                onChange={handleChange}
                required
                className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition bg-white"
              >
                <option value="">{r.year_default}</option>
                {r.year_options.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">{r.social_label}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                  </svg>
                </span>
                <input
                  type="url"
                  name="social"
                  value={form.social}
                  onChange={handleChange}
                  placeholder={r.social_placeholder}
                  className="w-full border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">{r.note_label}</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={3}
                placeholder=""
                className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 shrink-0 accent-red-700 cursor-pointer"
              />
              <span className="text-sm text-zinc-600 leading-6">
                {r.agree_pre}{" "}
                <a
                  href="/rules"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vsa-blue underline underline-offset-2 hover:text-vsa-darkred transition-colors"
                >
                  {r.agree_link}
                </a>{" "}
                {r.agree_post}
              </span>
            </label>

            {state === "error" && (
              <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={state === "loading" || !agreed}
              className="mt-2 w-full bg-red-700 text-white font-semibold py-3.5 rounded-xl hover:bg-red-800 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "loading" ? r.submitting : r.submit}
            </button>
          </form>
        </div>
      </main>

      {/* Quyền lợi thành viên */}
      <section className="bg-zinc-50 py-20 px-6 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto">

          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-vsa-blue mb-3">{r.benefits_title}</h2>
              <p className="text-zinc-500 text-sm leading-7 max-w-xl mx-auto">
                {r.benefits_subtitle_pre}{" "}
                <span className="font-bold text-vsa-darkred text-base">{r.benefits_subtitle_price}</span>
                {r.benefits_subtitle_post}
              </p>
              <div className="inline-flex items-center gap-2 mt-4 bg-vsa-blue text-white text-sm font-semibold px-5 py-2 rounded-full shadow-sm">
                <svg className="w-4 h-4 text-vsa-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                300 NTD / {r.year_options[0].includes('Year') ? 'academic year' : r.year_options[0].includes('大') ? '學年' : 'năm học'}
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {r.benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-vsa-red flex items-center justify-center mb-4">
                    {BENEFIT_ICONS[i]}
                  </div>
                  <h3 className="font-semibold text-zinc-800 mb-2">{b.title}</h3>
                  <p className="text-zinc-500 text-sm leading-6">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 text-center">
              <a
                href="#register-form"
                className="inline-flex items-center gap-2 bg-vsa-red text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-vsa-darkred hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
                {r.benefits_cta}
              </a>
              <p className="text-zinc-400 text-xs mt-3">{r.benefits_cta_hint}</p>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}
