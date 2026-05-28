Hello2 
# TKU_VSA Website — Tài liệu hướng dẫn

Tài liệu này tổng hợp toàn bộ tư vấn và hướng dẫn setup trang web cho Hội Sinh Viên TKU_VSA tại Trường Đại học Đạm Giang, Đài Loan.

---

## Mục lục

1. [Tư vấn hướng đi](#1-tư-vấn-hướng-đi)
2. [Tech Stack được chọn](#2-tech-stack-được-chọn)
3. [Tính năng cần có](#3-tính-năng-cần-có)
4. [Hướng dẫn setup từ đầu](#4-hướng-dẫn-setup-từ-đầu)
5. [Cấu trúc thư mục](#5-cấu-trúc-thư-mục)
6. [Database Schema](#6-database-schema)
7. [Tên miền](#7-tên-miền)
8. [Khả năng chịu tải](#8-khả-năng-chịu-tải)
9. [Chi phí và quản lý](#9-chi-phí-và-quản-lý)
10. [Thứ tự thực hiện](#10-thứ-tự-thực-hiện)

---

## 1. Tư vấn hướng đi

### Bối cảnh
- Team chủ yếu biết Python, chưa làm web nhiều
- Cần trang web cho hội sinh viên người Việt tại Đài Loan
- Muốn chi phí thấp, dễ duy trì với 1–2 người tech

### Các phương án đã xem xét

| Phương án | Ưu điểm | Nhược điểm |
|---|---|---|
| **Next.js + Supabase** ✅ | Miễn phí, hiện đại, dễ quản lý | Cần học thêm JavaScript/React |
| Next.js + Firebase | Ecosystem Google | Phức tạp hơn Supabase |
| WordPress | Không cần code nhiều | Ít linh hoạt, khó tùy chỉnh |
| Django (Python) | Quen thuộc với team | Cần trả phí server, khó deploy miễn phí |

### Lý do chọn Next.js + Supabase
- **Vercel** host Next.js **hoàn toàn miễn phí**
- **Supabase** miễn phí, có dashboard quản lý data như Excel — không cần code để thêm bài
- Biết Python rồi thì JavaScript không khó học thêm (logic lập trình tương đồng)
- Phù hợp team nhỏ, không tốn tiền server
- Chịu tải tốt nhờ Static Generation của Next.js

---

## 2. Tech Stack được chọn

| Thành phần | Công nghệ | Vai trò |
|---|---|---|
| Frontend | **Next.js 14** (React) | Giao diện người dùng |
| Styling | **Tailwind CSS** | Thiết kế nhanh, đẹp |
| Database | **Supabase** (PostgreSQL) | Lưu trữ dữ liệu |
| Auth | **Supabase Auth** | Đăng nhập admin |
| Storage | **Supabase Storage** | Lưu ảnh gallery |
| Hosting | **Vercel** | Deploy website |
| Domain | **Namecheap / Gandi** | Tên miền tùy chỉnh |

---

## 3. Tính năng cần có

- [x] Trang giới thiệu hội (About us, lịch sử, ban chấp hành)
- [x] Tin tức / Sự kiện (đăng bài, thông báo)
- [x] Đăng ký thành viên (form online)
- [x] Hình ảnh / Gallery (album ảnh các sự kiện)

---

## 4. Hướng dẫn setup từ đầu

### Bước 1: Cài đặt môi trường

```bash
# 1. Cài Node.js — tải tại https://nodejs.org (chọn bản LTS)

# 2. Kiểm tra sau khi cài
node -v   # phải ra v20.x trở lên
npm -v

# 3. Cài Git — tải tại https://git-scm.com

# 4. Cài VS Code — tải tại https://code.visualstudio.com
```

### Bước 2: Tạo project Next.js

```bash
npx create-next-app@latest tku_vsa
```

Trả lời các câu hỏi như sau:

```
✔ Would you like to use TypeScript?           → Yes
✔ Would you like to use ESLint?               → Yes
✔ Would you like to use Tailwind CSS?         → Yes
✔ Would you like to use `src/` directory?     → No
✔ Would you like to use App Router?           → Yes
✔ Would you like to customize the import alias? → No
```

```bash
cd tku_vsa
npm install @supabase/supabase-js @supabase/ssr
```

### Bước 3: Tạo tài khoản Supabase

1. Vào [supabase.com](https://supabase.com) → đăng ký bằng GitHub
2. Tạo project mới → đặt tên `tku-vsa`, chọn region **Northeast Asia (ap-northeast-1)**
3. Vào **Settings → API** → copy 2 thứ:
   - `Project URL`
   - `anon public key`

### Bước 4: Tạo file `.env.local`

Tạo file `.env.local` ở thư mục gốc của project:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

> **Quan trọng:** File này chứa thông tin nhạy cảm. KHÔNG bao giờ commit lên Git/GitHub.

Kiểm tra `.gitignore` đã có dòng này chưa (thường có sẵn):

```
.env.local
```

### Bước 5: Kết nối Supabase

Tạo file `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### Bước 6: Chạy thử local

```bash
npm run dev
# Mở trình duyệt: http://localhost:3000
```

### Bước 7: Deploy lên Vercel

```bash
# 1. Khởi tạo Git và push lên GitHub
git init
git add .
git commit -m "init TKU-VSA website"

# Tạo repo trên github.com rồi chạy:
git remote add origin https://github.com/your-username/tku_vsa.git
git push -u origin main
```

2. Vào [vercel.com](https://vercel.com) → **Import GitHub repo**
3. Thêm **Environment Variables** (copy từ `.env.local`)
4. Nhấn **Deploy** → xong, có link public ngay

---

## 5. Cấu trúc thư mục

```
tku_vsa/
├── app/
│   ├── layout.tsx              # Layout chung (navbar, footer)
│   ├── page.tsx                # Trang chủ
│   ├── about/
│   │   └── page.tsx            # Giới thiệu hội
│   ├── events/
│   │   ├── page.tsx            # Danh sách sự kiện
│   │   └── [id]/page.tsx       # Chi tiết sự kiện
│   ├── gallery/
│   │   └── page.tsx            # Album ảnh
│   └── register/
│       └── page.tsx            # Đăng ký thành viên
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── EventCard.tsx
├── lib/
│   └── supabase.ts             # Kết nối Supabase
├── public/                     # Ảnh tĩnh (logo, banner)
├── .env.local                  # Biến môi trường (KHÔNG commit)
├── .gitignore
├── package.json
└── README.md
```

---

## 6. Database Schema

Chạy SQL sau trong **Supabase → SQL Editor**:

```sql
-- Bảng sự kiện
create table events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  date date,
  image_url text,
  created_at timestamp default now()
);

-- Bảng đăng ký thành viên
create table members (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  student_id text,
  email text,
  phone text,
  year_of_study int,
  created_at timestamp default now()
);

-- Row Level Security
alter table events enable row level security;
create policy "Public read events" on events for select using (true);

alter table members enable row level security;
create policy "Anyone can register" on members for insert with check (true);
```

---

## 7. Tên miền

### Có thể dùng tên miền tùy chỉnh không?

**Hoàn toàn được.** Vercel hỗ trợ custom domain, chỉ cần trỏ DNS.

```
Mua domain  →  Vercel Settings → Domains  →  Thêm domain  →  Trỏ DNS
```

### Lưu ý về `.com.tw`

`.com.tw` yêu cầu tổ chức có đăng ký pháp nhân tại Đài Loan. Nếu hội chưa có thì dùng:
- `.tw` — đơn giản hơn, không yêu cầu pháp nhân
- `.com` — phổ biến toàn cầu

### Nơi mua domain và giá

| Nhà cung cấp | Giá ước tính | Ghi chú |
|---|---|---|
| **Namecheap** | ~$10–13 USD/năm | Phổ biến, giao diện dễ dùng |
| **Gandi.net** | ~$12–15 USD/năm | Uy tín, hỗ trợ tốt |
| **PChome域名** | Giá Đài Loan | Thanh toán tiện hơn nếu ở Đài |

---

## 8. Khả năng chịu tải

### 1000 người truy cập cùng lúc — có bị nghẽn không?

**Không bị nghẽn.** Giới hạn free tier hoàn toàn đủ dùng:

| Thành phần | Giới hạn free tier | Đánh giá |
|---|---|---|
| **Vercel** | 100GB bandwidth/tháng | Đủ dùng cho hội sinh viên |
| **Supabase DB** | 500MB storage | Đủ cho hàng nghìn bài viết, thành viên |
| **Supabase Storage** | 1GB | Nên dùng thêm Cloudinary free cho ảnh |
| **Supabase Bandwidth** | 2GB/tháng | Ổn với traffic thông thường |

Next.js dùng **Static Generation** — các trang được render sẵn thành HTML, server không phải xử lý nhiều → rất nhanh, chịu tải tốt.

1000 người cùng lúc chỉ xảy ra khi có sự kiện lớn và đây là điều hoàn toàn trong tầm xử lý.

### Khi nào cần nâng cấp?

Nếu sau này phát triển lớn hơn (10,000+ người thường xuyên):
- Nâng Supabase Pro: ~$25 USD/tháng
- Vercel Pro: ~$20 USD/tháng (thường không cần)

---

## 9. Chi phí và quản lý

### Chi phí hàng năm

```
Domain (.com / .tw)     ~$10–15 USD/năm   (~320–480 NTD) - tkuvsa.tw
Vercel                   $0  (free)
Supabase                 $0  (free, đủ dùng)
──────────────────────────────────────────
Tổng                    ~$10–15 USD/năm
```

### 1–2 người tech có đủ không?

**Đủ, thậm chí dư.** Phân chia công việc:

| Việc cần làm | Tần suất | Mức độ khó |
|---|---|---|
| Thêm bài viết / sự kiện | Hàng tuần | Dễ — qua Supabase dashboard như dùng Excel |
| Upload ảnh gallery | Sau mỗi event | Dễ — kéo thả trên Supabase Storage |
| Fix bug nhỏ, cập nhật UI | Khi cần | Trung bình |
| Gia hạn tên miền | 1 lần/năm | Dễ |
| Vercel / Supabase | Tự động | Không cần làm gì |

---

## 10. Thứ tự thực hiện

| # | Việc cần làm | Ghi chú |
|---|---|---|
| 1 | Cài Node.js, Git, VS Code | Prerequisites |
| 2 | Chạy `npx create-next-app` | Tạo project |
| 3 | Tạo account Supabase, tạo project | Chọn region Northeast Asia |
| 4 | Tạo file `.env.local` | Điền URL và key từ Supabase |
| 5 | Chạy SQL tạo database | Trong Supabase SQL Editor |
| 6 | Code từng trang | Trang chủ → About → Events → Gallery → Register |
| 7 | Test local (`npm run dev`) | Kiểm tra trên máy trước |
| 8 | Push lên GitHub | `git push` |
| 9 | Deploy lên Vercel | Import GitHub repo |
| 10 | Kết nối tên miền | Sau khi mua domain |

---

*Tài liệu được soạn cho TKU_VSA — Hội Sinh Viên Người Việt tại Trường Đại học Đạm Giang, Đài Loan.*
