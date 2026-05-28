"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Status = "pending" | "active" | "inactive";

type Member = {
  id: string;
  full_name: string;
  dob: string | null;
  student_id: string | null;
  major: string | null;
  email: string | null;
  phone: string | null;
  year_of_study: number | null;
  social: string | null;
  note: string | null;
  status: Status;
  notes: string | null;
  created_at: string;
};

const YEAR_LABELS: Record<number, string> = {
  1: "Năm 1", 2: "Năm 2", 3: "Năm 3",
  4: "Năm 4", 5: "Năm 5+", 6: "Thạc sĩ", 7: "Tiến sĩ",
};

const STATUS_CONFIG: Record<Status, { label: string; className: string }> = {
  pending:  { label: "Chờ xác nhận",       className: "bg-yellow-100 text-yellow-800" },
  active:   { label: "Thành viên chính thức", className: "bg-green-100 text-green-800" },
  inactive: { label: "Không hoạt động",    className: "bg-red-100 text-red-700" },
};

const FILTER_TABS: { key: Status | "all"; label: string }[] = [
  { key: "all",      label: "Tất cả" },
  { key: "pending",  label: "Chờ xác nhận" },
  { key: "active",   label: "Chính thức" },
  { key: "inactive", label: "Không hoạt động" },
];

export default function MembersPage() {
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([]);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const checkAuth = useCallback(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.replace("/admin/login");
      return false;
    }
    setUserEmail(session.user.email ?? "");
    return true;
  }, [router]);

  const fetchMembers = useCallback(async () => {
    const { data } = await supabase
      .from("members")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setMembers(data as Member[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    checkAuth().then((ok) => { if (ok) fetchMembers(); });

    const channel = supabase
      .channel("members-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "members" }, () => {
        fetchMembers();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [checkAuth, fetchMembers]);

  async function updateStatus(id: string, status: Status) {
    setMembers((prev) => prev.map((m) => m.id === id ? { ...m, status } : m));
    await supabase.from("members").update({ status }).eq("id", id);
  }

  async function updateNotes(id: string, notes: string) {
    await supabase.from("members").update({ notes }).eq("id", id);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  const filtered = members
    .filter((m) => filter === "all" || m.status === filter)
    .filter((m) => !search || [m.full_name, m.student_id, m.email, m.phone].some(
      (v) => v?.toLowerCase().includes(search.toLowerCase())
    ));

  const stats = {
    total:    members.length,
    pending:  members.filter((m) => m.status === "pending").length,
    active:   members.filter((m) => m.status === "active").length,
    inactive: members.filter((m) => m.status === "inactive").length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <p className="text-zinc-400 text-sm">Đang tải...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* Header */}
      <header className="bg-vsa-blue text-white px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/images/system_images/cropped_circle_image.png"
            alt="TKU VSA"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-bold text-lg">TKU VSA</span>
          <span className="text-blue-300 text-sm">/ Admin</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-blue-200 text-sm hidden sm:block">{userEmail}</span>
          <button
            onClick={handleLogout}
            className="text-sm text-blue-200 hover:text-white transition flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Đăng xuất
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-800">Quản lý thành viên</h1>
          <p className="text-zinc-400 text-sm mt-1">Cập nhật real-time từ Supabase</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Tổng đăng ký",       value: stats.total,    color: "text-vsa-blue" },
            { label: "Chờ xác nhận",        value: stats.pending,  color: "text-yellow-600" },
            { label: "Chính thức",          value: stats.active,   color: "text-green-600" },
            { label: "Không hoạt động",     value: stats.inactive, color: "text-zinc-400" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-zinc-100 shadow-sm px-5 py-4">
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-zinc-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm theo tên, MSSV, email, SĐT..."
            className="w-full sm:max-w-xs border border-zinc-200 rounded-xl px-4 py-2 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-vsa-blue transition bg-white"
          />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === tab.key
                  ? "bg-vsa-blue text-white"
                  : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-400"
              }`}
            >
              {tab.label}
              {tab.key !== "all" && (
                <span className="ml-1.5 opacity-60">
                  {tab.key === "pending" ? stats.pending : tab.key === "active" ? stats.active : stats.inactive}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-x-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-zinc-400 text-sm">Không có thành viên nào.</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-100 text-zinc-400 text-left">
                  <th className="px-5 py-3.5 font-medium">#</th>
                  <th className="px-5 py-3.5 font-medium">Họ và tên</th>
                  <th className="px-5 py-3.5 font-medium">Ngày sinh</th>
                  <th className="px-5 py-3.5 font-medium">MSSV</th>
                  <th className="px-5 py-3.5 font-medium">Ngành học</th>
                  <th className="px-5 py-3.5 font-medium">Email</th>
                  <th className="px-5 py-3.5 font-medium">SĐT</th>
                  <th className="px-5 py-3.5 font-medium">Năm</th>
                  <th className="px-5 py-3.5 font-medium">Ngày đăng ký</th>
                  <th className="px-5 py-3.5 font-medium">Trang cá nhân</th>
                  <th className="px-5 py-3.5 font-medium">Trạng thái</th>
                  <th className="px-5 py-3.5 font-medium">Ghi chú (TV)</th>
                  <th className="px-5 py-3.5 font-medium">Ghi chú (BCH)</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m, i) => (
                  <tr key={m.id} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                    <td className="px-5 py-3.5 text-zinc-400">{i + 1}</td>
                    <td className="px-5 py-3.5 font-medium text-zinc-800 whitespace-nowrap">{m.full_name}</td>
                    <td className="px-5 py-3.5 text-zinc-500 whitespace-nowrap">
                      {m.dob ? new Date(m.dob).toLocaleDateString("vi-VN") : "—"}
                    </td>
                    <td className="px-5 py-3.5 text-zinc-500">{m.student_id ?? "—"}</td>
                    <td className="px-5 py-3.5 text-zinc-500">{m.major ?? "—"}</td>
                    <td className="px-5 py-3.5 text-zinc-500">{m.email ?? "—"}</td>
                    <td className="px-5 py-3.5 text-zinc-500 whitespace-nowrap">{m.phone ?? "—"}</td>
                    <td className="px-5 py-3.5 text-zinc-500 whitespace-nowrap">
                      {m.year_of_study ? YEAR_LABELS[m.year_of_study] ?? "—" : "—"}
                    </td>
                    <td className="px-5 py-3.5 text-zinc-400 whitespace-nowrap">
                      {new Date(m.created_at).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-5 py-3.5">
                      {m.social ? (
                        <a
                          href={m.social}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-vsa-blue hover:text-vsa-red transition-colors max-w-[140px]"
                          title={m.social}
                        >
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.1-1.1m-.758-4.9a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span className="truncate">{m.social.replace(/^https?:\/\//, '')}</span>
                        </a>
                      ) : (
                        <span className="text-zinc-300">—</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <select
                        value={m.status}
                        onChange={(e) => updateStatus(m.id, e.target.value as Status)}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-vsa-blue ${STATUS_CONFIG[m.status].className}`}
                      >
                        <option value="pending">Chờ xác nhận</option>
                        <option value="active">Thành viên chính thức</option>
                        <option value="inactive">Không hoạt động</option>
                      </select>
                    </td>
                    <td className="px-5 py-3.5 text-zinc-500 max-w-[160px]">
                      <span className="block truncate" title={m.note ?? ""}>{m.note || "—"}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <input
                        type="text"
                        defaultValue={m.notes ?? ""}
                        onBlur={(e) => updateNotes(m.id, e.target.value)}
                        placeholder="Thêm ghi chú..."
                        className="text-sm text-zinc-600 bg-transparent border-b border-transparent hover:border-zinc-200 focus:border-vsa-blue focus:outline-none transition w-40 placeholder:text-zinc-300"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
