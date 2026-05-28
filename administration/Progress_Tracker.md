20/05
Thêm file next.config.js => ko hiện warning sau mỗi lần chạy (npm run dev)
Sửa title và description trong file layout.tsx
Thêm thông tin vào file page.tsx

21/05
Chỉnh sửa file next.config.js => fix lỗi load trang chủ 
Navbar (Navbar.tsx):
Bỏ comment, bật logo hội VSA (logo_hoi_extract-1.png) ở góc phải navbar
Hero section (page.tsx):
Ảnh campus TKU làm background full-width
Overlay đỏ đậm (bg-red-900/70) giữ màu thương hiệu, chữ vẫn rõ
Text có drop-shadow để nổi hơn
Section mới "Cộng đồng của chúng tôi" (giữa Dịch vụ và Sự kiện):
Ảnh nhóm hiển thị full-width với bo góc và shadow
Caption italic phía dưới

22/05
Sẽ thêm 3 thứ:
Scroll-triggered fade-in cho từng section khi cuộn xuống
Nút CTA trong hero (smooth scroll xuống liên hệ)
Icon cho mỗi thẻ hỗ trợ
Thêm file FadeIn.tsx trong phần component
cập nhật page.tsx — thêm FadeIn, CTA button, và icon cho các thẻ.
Tạo trang /register với form đăng ký:
+Thêm link Đăng ký vào Navbar
+Thêm nút Đăng ký thành viên vào hero trang chủ
Thêm brand colors VSA vào globals.css
Cập nhật page.tsx: email, địa chỉ, thêm section Mission/Values/Vision, đổi màu contact

23/05
Thêm phần about và ảnh của từng trưởng ban, chủ tịch và phó chủ tịch

25/05
Tổ chức lại thư mục:
- Dọn dẹp public/: gộp ảnh vào public/images/ với 3 thư mục con (system_images, ganbu_images, events_galleries)
- Đổi tên tất cả file ảnh sang ASCII (bỏ dấu, bỏ khoảng trắng) để tránh lỗi URL
- Fix toàn bộ đường dẫn ảnh cũ (/fileanh/...) trong tất cả các trang
- Xóa next.config.ts (trùng với next.config.js)
- Tạo file administration/system.md — mô tả cấu trúc thư mục và vai trò từng file
- Tạo file administration/tech_terms.md — từ điển ~60 thuật ngữ kỹ thuật giải thích bằng tiếng Việt
Trang /register:
- Thêm section "Quyền lợi thành viên" bên dưới form (6 card, badge 300 NTD/năm, nút CTA scroll lên form)
- Thay section "Chúng tôi hỗ trợ gì?" trên trang chủ thành "Dành cho tân sinh viên" (chỉ giữ ARC, NHI, ngân hàng, tìm nhà — miễn phí, không cần là thành viên)
- Thêm checkbox "Tôi đồng ý với quy chế hoạt động" trước nút đăng ký — nút bị khoá cho đến khi tick
- Fix lỗi input fields: đổi text-white → text-zinc-800 (chữ gõ vào bị vô hình trước đó)
Trang /about/team (mới):
- Tạo trang /about/team với 15 thành viên chia theo 6 banƯ
- Đổi layout ảnh từ tròn sang thẻ dọc tỷ lệ 3:4 (phù hợp ảnh nghệ/Instagram)
- Thêm AboutSubNav (tab "Giới thiệu" / "Ban Chấp hành") sticky dưới navbar, dùng chung cho /about và /about/team
Trang /events (mới):
- Tạo trang /events với lịch sự kiện dự kiến chia theo Kỳ 1 và Kỳ 2
- Banner vàng nhắc đây là lịch dự kiến, theo dõi Instagram để cập nhật
- Section gallery ảnh phía cuối
- Thêm link "Sự kiện" vào Navbar
Trang /rules (mới):
- Tạo trang /rules — quy chế hoạt động công khai (Quyền lợi, Nghĩa vụ, Quy tắc ứng xử)
- Link từ checkbox trong /register, mở tab mới
Navbar:
- Đổi nút "Đăng ký" thành "Đăng ký thành viên"
- Thêm link "Sự kiện"
- Fix đường dẫn logo trường và logo hội
- Đổi nền navbar từ trắng 90% trong suốt sang trắng đặc
Sửa lỗi:
- Xóa CSS dark mode tự động (prefers-color-scheme: dark) — website luôn hiển thị nền trắng

26/05
ThemeProvider.tsx	Lưu theme vào localStorage, áp class dark lên <html>
ThemeToggle.tsx	Nút mặt trăng/mặt trời trong Navbar
globals.css	@custom-variant dark cho Tailwind + CSS variables dark
layout.tsx	Bọc <ThemeProvider>, thêm script chống flash trắng
Navbar.tsx	Dark classes + nút toggle
page.tsx	Dark classes cho tất cả section trắng/xám
about/page.tsx	Dark classes cho text và card
UI toggle: nút nhỏ gọn VI | EN | 中 đặt cạnh ThemeToggle trên Navbar.
Trang /about/team:
- Cập nhật ảnh đầy đủ cho 16 thành viên (đổi tên file mới, thêm Phạm Phúc Minh vào Ban Sự kiện)
- Chuyển Dương Nguyễn Hoàng Anh từ Ban Nhân sự sang Ban Sự kiện
- Thêm imgStyle cho từng thành viên — tự chỉnh zoom (scale) và điểm tập trung (transformOrigin) theo từng ảnh
- Thêm nút mạng xã hội bên dưới tên: tự nhận Instagram vs Facebook theo URL, hover đổi màu hồng/xanh
- Fix lỗi onClick trong Server Component gây crash trang
Trang Admin (/admin):
- Thêm nút icon đăng nhập vào Navbar, dẫn đến /admin/login
- Tạo ConditionalNavbar — ẩn navbar công khai trên toàn bộ route /admin/*
- Tạo /admin/page.tsx — tự redirect về /admin/members
- Thêm thanh tìm kiếm vào /admin/members (lọc theo tên, MSSV, email, SĐT)
- Fix status update: cập nhật UI ngay lập tức (optimistic update) không chờ Supabase real-time
- Đổi màu badge trạng thái: chính thức = xanh lá, không hoạt động = đỏ
- Thêm logo VSA + link trang chủ vào header /admin/members
- Thêm nút "Về trang chủ" trong /admin/login (icon góc trái + link dưới form)
- Fix dark mode cho /admin/login
- Fix lỗi đăng ký thành viên: RLS policy đổi từ `TO anon` → không chỉ định role
Logo:
- Tạo vsa_logo_transparent.png bằng ImageMagick (xóa nền trắng)
- Đổi toàn bộ logo sang cropped_circle_image.png (Navbar, About, Admin)
Sửa lỗi nhỏ:
- Fix React.FormEvent deprecated → đổi sang React.SyntheticEvent
- Fix dark mode cho AboutSubNav

27/05
Đăng ký thành viên:
Ngày tháng năm sinh * — thêm ngay sau "Họ và tên", dùng input date
Ngành học * — thêm ngay sau "Mã sinh viên", input text tự điền
Ghi chú — thêm sau "Năm học", dùng textarea, không có dấu * và không required
Tất cả field cũ (Mã sinh viên, Email, Số điện thoại, Năm học) đã được bổ sung dấu * và thuộc tính required
Ba ngôn ngữ (VI / EN / ZH) đều đã được cập nhật label tương ứng
