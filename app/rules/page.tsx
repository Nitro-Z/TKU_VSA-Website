import FadeIn from "../components/FadeIn";

export default function RulesPage() {
  return (
    <div className="flex flex-col min-h-full font-sans">

      <section className="bg-vsa-blue text-white py-16 px-6 text-center">
        <h1 className="text-3xl font-bold">Quy chế hoạt động</h1>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-12 w-full">

        {/* Quyền lợi */}
        <FadeIn>
          <div>
            <h2 className="text-xl font-bold text-vsa-blue mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-vsa-blue text-white text-sm flex items-center justify-center shrink-0">1</span>
              Quyền lợi thành viên
            </h2>
            <ul className="flex flex-col gap-3 text-zinc-600 text-sm leading-7">
              {[
                "Tham gia toàn bộ sự kiện do hội tổ chức, đồng tổ chức hoặc trong mạng lưới liên kết.",
                "Nhận chứng nhận hoạt động ngoại khóa — đủ điều kiện hoàn thành yêu cầu 3 tín chỉ của nhà trường.",
                "Được hỗ trợ học tập, tiếp cận tài liệu và đề thi cũ từ cộng đồng.",
                "Được kết nối với mentor là anh chị khoá trên theo từng ngành học.",
                "Tham gia group chat nội bộ và mạng lưới alumni đang học tập, làm việc tại Đài Loan.",
                "Được bầu cử và ứng cử vào ban chấp hành trong kỳ bầu cử hàng năm.",
                "Được ưu tiên đăng ký các workshop và buổi chia sẻ chuyên môn.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-vsa-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <hr className="border-zinc-100" />

        {/* Nghĩa vụ */}
        <FadeIn>
          <div>
            <h2 className="text-xl font-bold text-vsa-blue mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-vsa-blue text-white text-sm flex items-center justify-center shrink-0">2</span>
              Nghĩa vụ thành viên
            </h2>
            <ul className="flex flex-col gap-3 text-zinc-600 text-sm leading-7">
              {[
                "Đóng phí thành viên đúng hạn: 300 NTD / năm học.",
                "Tham gia tích cực ít nhất một hoạt động chính thức của hội trong năm học.",
                "Giữ gìn hình ảnh và uy tín của hội trong và ngoài nhà trường.",
                "Tuân thủ quy tắc ứng xử và các quy định của hội.",
                "Thông báo cho ban chấp hành nếu không tiếp tục tham gia hội.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-vsa-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <hr className="border-zinc-100" />

        {/* Quy tắc ứng xử */}
        <FadeIn>
          <div>
            <h2 className="text-xl font-bold text-vsa-blue mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-vsa-blue text-white text-sm flex items-center justify-center shrink-0">3</span>
              Quy tắc ứng xử
            </h2>
            <ul className="flex flex-col gap-3 text-zinc-600 text-sm leading-7">
              {[
                "Tôn trọng tất cả thành viên, không phân biệt khoá học, ngành học hay xuất thân.",
                "Ứng xử văn minh, lịch sự trên mạng xã hội khi đại diện cho hội.",
                "Không chia sẻ thông tin nội bộ hay dữ liệu cá nhân của thành viên ra ngoài khi chưa được phép.",
                "Giải quyết mâu thuẫn bằng đối thoại trực tiếp, không gây chia rẽ hay công kích cộng đồng.",
                "Không sử dụng tên hoặc hình ảnh của hội cho mục đích cá nhân khi chưa được ban chấp hành chấp thuận.",
                "Hành động phù hợp với giá trị cốt lõi: Đoàn Kết – Trách Nhiệm – Năng Động.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-vsa-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <hr className="border-zinc-100" />

        {/* Liên hệ */}
        <FadeIn>
          <p className="text-zinc-400 text-sm text-center leading-7">
            Có thắc mắc về quy chế? Liên hệ hội qua{" "}
            <a href="mailto:tku.vsa2026@gmail.com" className="text-vsa-blue underline hover:text-vsa-darkred transition-colors">
              tku.vsa2026@gmail.com
            </a>
          </p>
        </FadeIn>

        <div className="text-center">
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-vsa-red text-white font-semibold px-7 py-3 rounded-full hover:bg-vsa-darkred transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại đăng ký
          </a>
        </div>

      </div>
    </div>
  );
}
