# Từ điển thuật ngữ kỹ thuật — TKU VSA Web

---

## Giao diện (UI)

| Thuật ngữ | Giải thích |
|---|---|
| **Navbar** | Thanh điều hướng nằm trên cùng trang web. Chứa logo, các link đến các trang khác. |
| **Footer** | Phần cuối trang web. Thường chứa thông tin liên hệ, link mạng xã hội, bản quyền. |
| **Hero section** | Phần đầu tiên đập vào mắt khi vào trang — thường có ảnh nền lớn, tiêu đề to, nút CTA. |
| **CTA (Call To Action)** | Nút kêu gọi hành động. Ví dụ: nút "Đăng ký ngay", "Liên hệ ngay". |
| **Banner** | Dải ảnh hoặc nội dung rộng ngang, thường dùng để quảng bá sự kiện hoặc thông báo. |
| **Card** | Ô hình chữ nhật chứa thông tin (ảnh + tiêu đề + mô tả). Ví dụ: mỗi thành viên ban chấp hành là 1 card. |
| **Modal** | Hộp thoại hiện ra đè lên trang, yêu cầu người dùng tương tác trước khi tiếp tục. |
| **Dropdown** | Menu thả xuống khi click hoặc hover vào 1 mục. |
| **Overlay** | Lớp phủ trong suốt đè lên ảnh/video, thường dùng để làm tối ảnh nền cho chữ dễ đọc hơn. |
| **Responsive** | Giao diện tự động co giãn phù hợp với mọi kích thước màn hình (điện thoại, máy tính bảng, laptop). |
| **Layout** | Cách sắp xếp bố cục chung của trang — vị trí navbar, nội dung chính, footer. |
| **Section** | Một khối nội dung trong trang. Ví dụ: section "Sứ mệnh", section "Liên hệ". |
| **Grid** | Dạng bố cục lưới chia đều các phần tử theo hàng và cột. |
| **Flex / Flexbox** | Cách căn chỉnh các phần tử theo hàng ngang hoặc dọc linh hoạt. |

---

## Kỹ thuật & Code

| Thuật ngữ | Giải thích |
|---|---|
| **Component** | Khối giao diện tái sử dụng được. Ví dụ: `Navbar.tsx` là 1 component, dùng ở mọi trang mà không cần viết lại. |
| **Props** | Dữ liệu truyền vào component từ bên ngoài. Như tham số của hàm vậy. |
| **State** | Trạng thái nội bộ của component — khi state thay đổi, giao diện tự cập nhật. |
| **Hook** | Hàm đặc biệt trong React. Ví dụ: `useState` để lưu trạng thái, `useEffect` để chạy code khi component load. |
| **Route / Routing** | Điều hướng giữa các trang. Ví dụ: `/about`, `/register` là các route. |
| **API** | Cổng giao tiếp giữa frontend và backend/database. Frontend gửi yêu cầu, API trả về dữ liệu. |
| **Environment Variable (.env)** | Biến môi trường — lưu thông tin nhạy cảm như password, API key. KHÔNG commit lên GitHub. |
| **Build** | Quá trình biên dịch code thành bản sẵn sàng deploy lên server. Chạy bằng `npm run build`. |
| **Deploy** | Đưa website lên server để mọi người truy cập được qua internet. |
| **TypeScript** | Phiên bản nâng cấp của JavaScript — có kiểm tra kiểu dữ liệu, giảm lỗi. File đuôi `.tsx` hoặc `.ts`. |
| **Import / Export** | Nhập/xuất code giữa các file. `export` để chia sẻ, `import` để dùng. |
| **npm** | Công cụ quản lý thư viện cho JavaScript. `npm install` để cài thư viện, `npm run dev` để chạy local. |

---

## Next.js cụ thể

| Thuật ngữ | Giải thích |
|---|---|
| **App Router** | Hệ thống định tuyến mới của Next.js — mỗi folder trong `app/` là 1 đường dẫn URL. |
| **page.tsx** | File bắt buộc để tạo 1 trang. Ví dụ: `app/about/page.tsx` → trang `/about`. |
| **layout.tsx** | File định nghĩa khung chung (navbar, footer) bao bọc tất cả các trang con. |
| **`"use client"`** | Khai báo ở đầu file — báo cho Next.js biết component này chạy ở trình duyệt (có thể dùng state, event). |
| **Server Component** | Component mặc định trong Next.js App Router — chạy trên server, nhanh hơn, không dùng được state. |
| **Static Generation** | Trang được render thành HTML sẵn lúc build — rất nhanh, chịu tải tốt. |
| **`next/image`** | Component ảnh tối ưu của Next.js — tự nén, lazy load, tránh layout shift. Dùng thay thế `<img>`. |
| **`next/link`** | Component điều hướng của Next.js — dùng thay `<a>` để chuyển trang không tải lại toàn bộ. |

---

## Database & Backend

| Thuật ngữ | Giải thích |
|---|---|
| **Supabase** | Dịch vụ database online miễn phí — có giao diện quản lý dữ liệu như Excel, không cần tự dựng server. |
| **PostgreSQL** | Loại database mà Supabase dùng — lưu dữ liệu dạng bảng (table), dùng ngôn ngữ SQL. |
| **Table** | Bảng dữ liệu trong database. Ví dụ: bảng `members` lưu danh sách thành viên đăng ký. |
| **Row** | Một hàng dữ liệu trong bảng — tương đương 1 bản ghi. Ví dụ: 1 thành viên = 1 row. |
| **Column / Field** | Cột trong bảng. Ví dụ: `full_name`, `email`, `phone` là các column của bảng `members`. |
| **SQL** | Ngôn ngữ truy vấn database. Ví dụ: `SELECT * FROM members` = lấy tất cả dữ liệu từ bảng members. |
| **RLS (Row Level Security)** | Tính năng bảo mật của Supabase — kiểm soát ai được đọc/ghi dữ liệu nào. |
| **Supabase Storage** | Kho lưu trữ file/ảnh của Supabase — dùng để upload ảnh gallery sự kiện. |
| **Auth (Authentication)** | Xác thực người dùng — đăng nhập, đăng xuất. Dùng cho trang admin. |

---

## Hosting & Deploy

| Thuật ngữ | Giải thích |
|---|---|
| **Vercel** | Nền tảng deploy Next.js miễn phí — kết nối GitHub, tự động deploy khi push code mới. |
| **Domain** | Tên miền website. Ví dụ: `tkuvsa.tw`. Phải mua riêng, giá ~$10–15 USD/năm. |
| **DNS** | Hệ thống dịch tên miền thành địa chỉ IP server. Cần trỏ DNS sau khi mua domain. |
| **Git** | Công cụ quản lý lịch sử code — theo dõi ai thay đổi gì, khi nào. |
| **GitHub** | Website lưu trữ code trên cloud, dùng Git. Cả team có thể cùng làm việc trên 1 repo. |
| **Commit** | Lưu 1 "snapshot" trạng thái code tại 1 thời điểm. Kèm message mô tả thay đổi. |
| **Push** | Đẩy code từ máy tính lên GitHub. |
| **Pull** | Kéo code mới nhất từ GitHub về máy. |
| **Branch** | Nhánh code riêng để phát triển tính năng mới mà không ảnh hưởng code chính (`main`). |

---

## Styling

| Thuật ngữ | Giải thích |
|---|---|
| **Tailwind CSS** | Thư viện CSS dùng class có sẵn. Ví dụ: `text-red-700` = chữ đỏ, `px-6` = padding ngang 24px. |
| **CSS** | Ngôn ngữ định kiểu cho HTML — màu sắc, font chữ, kích thước, vị trí. |
| **Padding** | Khoảng cách bên trong phần tử (giữa nội dung và viền). |
| **Margin** | Khoảng cách bên ngoài phần tử (giữa phần tử này và phần tử khác). |
| **Border** | Đường viền bao quanh phần tử. |
| **Shadow** | Đổ bóng cho phần tử — `shadow-sm`, `shadow-lg`. |
| **Rounded** | Bo góc phần tử — `rounded-xl`, `rounded-full`. |
| **Hover** | Hiệu ứng khi di chuột vào phần tử. Ví dụ: `hover:bg-red-800` = nền đổi sang đỏ đậm khi hover. |
| **Transition / Animation** | Hiệu ứng chuyển động mượt mà. Ví dụ: `FadeIn` là animation xuất hiện dần khi scroll xuống. |
| **z-index** | Thứ tự lớp xếp chồng — số càng cao thì nằm trên cùng. Navbar thường có z-index cao. |
