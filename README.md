# TKU VSA Website

Website chính thức của **Hội Sinh Viên Việt Nam tại Đại học Tamkang** (TKU VSA), Đài Loan.

## Tính năng

- Giới thiệu hội và ban chấp hành
- Lịch hoạt động theo học kỳ
- Đăng ký thành viên trực tuyến
- Nội quy và FAQ
- Admin dashboard quản lý thành viên
- Hỗ trợ 3 ngôn ngữ: Tiếng Việt / English / 中文
- Dark mode / Light mode

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4**
- **Supabase** (Auth + Database + Realtime)

## Cài đặt

```bash
npm install
```

Tạo file `.env.local` ở thư mục gốc:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## Liên hệ

- Instagram: [@tku_vsa](https://www.instagram.com/tku_vsa/)
- Facebook: [vsa.tamkang](https://www.facebook.com/vsa.tamkang)
- Email: tku.vsa2026@gmail.com
