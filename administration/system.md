# Cấu trúc hệ thống — TKU_VSA Website

---

## Cấu trúc thư mục

```
tku_vsa/
├── app/                        # Toàn bộ trang web (bắt buộc, Next.js App Router)
│   ├── about/page.tsx          # Trang /about — giới thiệu hội, ban chấp hành
│   ├── register/page.tsx       # Trang /register — đăng ký thành viên + quyền lợi
│   ├── components/
│   │   ├── Navbar.tsx          # Thanh điều hướng trên cùng
│   │   └── FadeIn.tsx          # Animation fade-in khi scroll
│   ├── favicon.ico             # Icon tab trình duyệt
│   ├── globals.css             # CSS toàn cục, khai báo màu sắc thương hiệu
│   ├── layout.tsx              # Khung chung bọc tất cả các trang (Navbar, Footer)
│   └── page.tsx                # Trang chủ /
│
├── lib/
│   └── supabase.ts             # Kết nối Supabase (database)
│
├── public/                     # File tĩnh (ảnh, icon,...) — truy cập qua URL trực tiếp
│   └── images/
│       ├── system_images/      # Ảnh dùng cho hệ thống (logo, campus,...)
│       ├── ganbu_images/       # Ảnh cán bộ ban chấp hành
│       └── events_galleries/   # Ảnh sự kiện / gallery
│
├── administration/             # Tài liệu nội bộ của team (không liên quan đến code)
│   ├── Pipeline.md             # Hướng dẫn setup và kế hoạch tổng thể
│   ├── Progress_Tracker.md     # Nhật ký tiến độ theo ngày
│   ├── To_do_list.md           # Danh sách tính năng cần làm
│   ├── tech_terms.md           # Từ điển thuật ngữ kỹ thuật
│   ├── Note.md                 # Thông tin hội (màu sắc, email, nhân sự,...)
│   └── system.md               # File này — mô tả cấu trúc hệ thống
│
├── node_modules/               # Thư viện đã cài — TỰ GENERATE, không sửa tay
├── .next/                      # Bản biên dịch — TỰ GENERATE khi npm run dev/build
│
├── .env.local                  # Biến môi trường (URL + key Supabase) — KHÔNG commit lên GitHub
├── .gitignore                  # Danh sách file/folder không commit lên GitHub
├── next.config.js              # Cấu hình Next.js
├── tsconfig.json               # Cấu hình TypeScript
├── eslint.config.mjs           # Cấu hình kiểm tra lỗi code
├── postcss.config.mjs          # Cấu hình Tailwind CSS
├── package.json                # Danh sách thư viện dự án
├── package-lock.json           # Khoá phiên bản thư viện (không sửa tay)
├── next-env.d.ts               # Tự generate bởi Next.js — không sửa tay
├── AGENTS.md / CLAUDE.md       # Hướng dẫn cho AI assistant (Claude Code)
└── README.md                   # Mô tả project (mặc định Next.js, có thể xóa)
```

---

## Phân loại file — cái nào được đụng, cái nào không

| File / Folder | Được sửa? | Ghi chú |
|---|---|---|
| `app/` | ✅ Được | Code chính của website |
| `lib/` | ✅ Được | Thêm file helper nếu cần |
| `public/images/` | ✅ Được | Thêm/xóa ảnh thoải mái |
| `administration/` | ✅ Được | Tài liệu nội bộ |
| `.env.local` | ✅ Được | Nhưng KHÔNG commit lên GitHub |
| `next.config.js` | ✅ Được | Nếu cần cấu hình thêm |
| `node_modules/` | ❌ Không | Tự generate bởi `npm install` |
| `.next/` | ❌ Không | Tự generate bởi `npm run dev` |
| `package-lock.json` | ❌ Không | Tự generate bởi npm |
| `next-env.d.ts` | ❌ Không | Tự generate bởi Next.js |
| `AGENTS.md` / `CLAUDE.md` | ❌ Không | Dành cho Claude Code |

---

## Các file bắt buộc phải nằm ở root

Những file cấu hình sau **không thể chuyển vào folder** — công cụ tương ứng yêu cầu chúng phải ở thư mục gốc:

- `next.config.js` — Next.js
- `tsconfig.json` — TypeScript
- `eslint.config.mjs` — ESLint
- `postcss.config.mjs` — Tailwind CSS / PostCSS
- `package.json` — npm
- `.gitignore` — Git
- `.env.local` — Next.js / môi trường

---

## Lưu ý khi làm việc nhóm

- `node_modules/` và `.next/` **không có trên GitHub** — khi clone về máy mới, chạy `npm install` là tự tạo lại.
- `.env.local` **không có trên GitHub** — ai cần thì được cấp riêng.
- Chỉ rename file ảnh trong `public/` bằng tên ASCII (không dấu, không khoảng trắng) để tránh lỗi URL.

---

## Lệnh hay dùng

```bash
npm run dev        # Chạy website local tại http://localhost:3000
npm run build      # Build bản production
npm install        # Cài lại thư viện (sau khi clone hoặc thêm package mới)
```
