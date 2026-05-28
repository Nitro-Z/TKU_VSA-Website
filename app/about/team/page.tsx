// Mỗi người giờ đều có imgStyle sẵn để chỉnh. Cách dùng:
// scale(1) = không zoom, scale(1.3) = zoom 30%, scale(1.5) = zoom 50%...
// transformOrigin: "center X%" — X% điều khiển điểm zoom theo chiều dọc:
// 0% → zoom vào đỉnh ảnh
// 30% → zoom vào phần trên (mặt/đầu)
// 50% → zoom vào giữa
// 100% → zoom vào đáy ảnh

'use client';
import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import AboutSubNav from "../../components/AboutSubNav";
import { useT } from "../../components/LanguageProvider";

type Member = {
  role: string;
  name: string;
  img: string;
  isLeader?: boolean;
  imgStyle?: React.CSSProperties;
  social?: string;
};

type Department = {
  name: string;
  members: Member[];
};

const departments: Department[] = [
  {
    name: "Ban Lãnh đạo",
    members: [
      { role: "Chủ tịch CLB",    name: "Phạm Khắc Nam",      img: "/images/ganbu_images/nampham.jpg",         isLeader: true, imgStyle: { transform: "scale(1.4)", transformOrigin: "center 100%" }, social: "https://www.instagram.com/_nampk_/" },
      { role: "Phó Chủ tịch CLB", name: "Nguyễn Thanh Ngọc", img: "/images/ganbu_images/nguyenthanhngoc.jpg", isLeader: true, imgStyle: { transform: "scale(1.1)",   transformOrigin: "center 100%" }, social: "https://www.instagram.com/yuqing_noc/" },
    ],
  },
  {
    name: "Ban Cố Vấn",
    members: [
      { role: "Cố Vấn",             name: "Joy",     img: "/images/ganbu_images/c_joy.png",  isLeader: true, imgStyle: { transform: "scale(1.1)", transformOrigin: "center 70%"  }, social: "https://www.instagram.com/joy_ii00/" },
      { role: "Giáo Sư Hướng Dẫn", name: "Ya Vinh", img: "/images/ganbu_images/yavinh.jpg", isLeader: true, imgStyle: { transform: "scale(1.1)", transformOrigin: "center 100%" }, social: "https://www.facebook.com/vinh.ya.7" },
    ],
  },
  {
    name: "Ban Nhân sự",
    members: [
      { role: "Trưởng ban", name: "Đỗ Thị Hà Linh", img: "/images/ganbu_images/dolinh.png", isLeader: true, imgStyle: { transform: "scale(1.3)", transformOrigin: "center 100%" }, social: "https://www.instagram.com/fahnil_7/" },
    ],
  },
  {
    name: "Ban Truyền thông",
    members: [
      { role: "Trưởng ban", name: "Mai Xuân Bảo",       img: "/images/ganbu_images/mxbao.png",       isLeader: true, imgStyle: { transform: "scale(1)", transformOrigin: "center 30%" }, social: "https://www.instagram.com/mxbao_106/" },
      { role: "Thành viên", name: "Đỗ Thị Thảo Trinh",  img: "/images/ganbu_images/thaotrinh.png",              imgStyle: { transform: "scale(1)", transformOrigin: "center 30%" }, social: "https://www.instagram.com/xxibgdtriwgg_/" },
      { role: "Thành viên", name: "Trương Gia Hân",      img: "/images/ganbu_images/giahan.png",                 imgStyle: { transform: "scale(1)", transformOrigin: "center 30%" }, social: "https://www.instagram.com/29_rkgms/" },
    ],
  },
  {
    name: "Ban Tài chính & Đối ngoại",
    members: [
      { role: "Trưởng ban", name: "Trương Trung Sơn",       img: "/images/ganbu_images/jayson.png",    isLeader: true, imgStyle: { transform: "scale(1)", transformOrigin: "center 30%" }, social: "https://www.instagram.com/trungson_truong/" },
      { role: "Thành viên", name: "Nguyễn Lê Phương Thảo",  img: "/images/ganbu_images/thaonguyen.png",             imgStyle: { transform: "scale(1)", transformOrigin: "center 30%" }, social: "https://www.instagram.com/nlpthaoo/" },
      { role: "Thành viên", name: "Nguyễn Lê Hạ Vy",        img: "/images/ganbu_images/giavy.png",                  imgStyle: { transform: "scale(1)", transformOrigin: "center 30%" }, social: "https://www.instagram.com/cath_lilcath/" },
    ],
  },
  {
    name: "Ban Sự kiện",
    members: [
      { role: "Trưởng ban", name: "Trần Nguyễn Hùng",       img: "/images/ganbu_images/hungtran_1.jpg",    isLeader: true, imgStyle: { transform: "scale(1.3)", transformOrigin: "center 100%" }, social: "https://www.instagram.com/alex_chenruanxiong/" },
      { role: "Thành viên", name: "Mai Xuân Quốc Anh",       img: "/images/ganbu_images/quocanhmai.png",              imgStyle: { transform: "scale(1.2)", transformOrigin: "center 100%" }, social: "https://www.instagram.com/iam.richard_06/" },
      { role: "Thành viên", name: "Nguyễn Thuỳ Dương",       img: "/images/ganbu_images/thuyduong.png",               imgStyle: { transform: "scale(1.3)", transformOrigin: "center 100%" }, social: "https://www.instagram.com/wendyy._.aa/" },
      { role: "Thành viên", name: "Phạm Phúc Minh",          img: "/images/ganbu_images/minhpham.png",                imgStyle: { transform: "scale(1.3)", transformOrigin: "center 100%" }, social: "https://www.instagram.com/mphamphuc/" },
      { role: "Thành viên", name: "Dương Nguyễn Hoàng Anh",  img: "/images/ganbu_images/hoanganh.jpg",                imgStyle: { transform: "scale(1)", transformOrigin: "center 30%"  }, social: "https://m.me/anhhoang.duong.58" },
    ],
  },
];

function MemberCard({ member, roleLabel, profileLink }: { member: Member; roleLabel: string; profileLink: string }) {
  return (
    <div className="group cursor-default transition-all duration-300 hover:-translate-y-2">
      {/* Ảnh 3:4 */}
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-zinc-100 dark:bg-zinc-700 mb-3">
        {member.img ? (
          <Image
            src={member.img}
            alt={member.name}
            fill
            style={member.imgStyle}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>

      {/* Tên và chức vụ */}
      <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${member.isLeader ? "text-vsa-red" : "text-zinc-400"}`}>
        {roleLabel}
      </p>
      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-vsa-blue dark:group-hover:text-vsa-gold transition-colors duration-200 leading-snug">
        {member.name}
      </p>
      {member.social && (
        <a
          href={member.social}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors duration-200 ${
            member.social.includes("instagram.com")
              ? "hover:text-pink-500"
              : "hover:text-blue-600"
          }`}
        >
          {member.social.includes("instagram.com") ? (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          )}
          <span>{profileLink}</span>
        </a>
      )}
    </div>
  );
}

export default function TeamPage() {
  const { t } = useT();
  const te = t.team;

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
        <div className="absolute inset-0 bg-black/50" />
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-1 absolute -top-10 -left-10 w-64 h-64 rounded-full bg-vsa-red/25 blur-3xl" />
          <div className="orb-2 absolute -bottom-8 right-0 w-56 h-56 rounded-full bg-vsa-gold/20 blur-3xl" />
          <div className="orb-3 absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-blue-400/15 blur-2xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <p className="text-blue-300 text-sm font-medium tracking-widest uppercase animate-slide-up">
            {te.hero_label}
          </p>
          <h1 className="text-3xl font-bold drop-shadow-lg animate-slide-up animate-gradient-text">
            {te.hero_title}
          </h1>
          <p className="text-blue-200 max-w-lg text-sm leading-7 animate-slide-up delay-250">
            {te.hero_subtitle}
          </p>
        </div>
      </section>

      <AboutSubNav active="team" />

      {/* Departments */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {departments.map((dept, di) => (
            <FadeIn key={dept.name} delay={di * 60}>
              <div>
                {/* Department header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-7 rounded-full bg-vsa-red" />
                  <h2 className="text-xl font-bold text-vsa-white">{te.dept[dept.name] ?? dept.name}</h2>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                    {dept.members.length} {te.member_suffix}
                  </span>
                </div>

                {/* Members grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {dept.members.map((member, mi) => (
                    <FadeIn key={member.name} delay={mi * 60}>
                      <MemberCard
                        member={member}
                        roleLabel={te.role[member.role] ?? member.role}
                        profileLink={te.profile_link}
                      />
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>


    </div>
  );
}
