export type Lang = 'vi' | 'en' | 'zh'

export type MissionItem  = { title: string; desc: string }
export type SupportItem  = { title: string; desc: string }
export type BenefitItem  = { title: string; desc: string }
export type EventItem    = { title: string; date: string; desc: string; optional?: boolean; ongoing?: boolean }
export type FAQItem      = { q: string; a: string }
export type FAQSection   = { category: string; items: FAQItem[] }

type T = {
  nav: {
    about: string
    events: string
    faq: string
    register: string
    contact: string
  }
  home: {
    hero_title: string
    hero_subtitle: string
    cta_register: string
    cta_contact: string
    who_title: string
    who_body: string
    mission_title: string
    missions: MissionItem[]
    values_title: string
    values: string[]
    vision_title: string
    vision_body: string
    support_title: string
    support_subtitle: string
    support_items: SupportItem[]
    community_title: string
    community_caption: string
    events_title: string
    events_empty: string
    contact_title: string
  }
  about: {
    hero_title: string
    hero_subtitle: string
    who_title: string
    who_body1: string
    who_body2: string
    mission_title: string
    missions: MissionItem[]
    vision_title: string
    vision_body: string
    values_title: string
    values: string[]
    community_title: string
    community_caption: string
    subnav_intro: string
    subnav_team: string
  }
  team: {
    hero_label: string
    hero_title: string
    hero_subtitle: string
    profile_link: string
    member_suffix: string
    dept: Record<string, string>
    role: Record<string, string>
  }
  events: {
    hero_title: string
    hero_subtitle: string
    disclaimer: string
    sem1_title: string
    sem1_dates: string
    sem2_title: string
    sem2_dates: string
    optional_label: string
    ongoing_label: string
    gallery_title: string
    gallery_subtitle: string
    gallery_caption: string
    ky1: EventItem[]
    ky2: EventItem[]
  }
  faq: {
    hero_title: string
    hero_subtitle: string
    contact_prompt: string
    contact_link: string
    sections: FAQSection[]
  }
  register: {
    title: string
    subtitle: string
    name_label: string
    name_placeholder: string
    dob_label: string
    id_label: string
    major_label: string
    major_placeholder: string
    email_label: string
    phone_label: string
    year_label: string
    social_label: string
    social_placeholder: string
    note_label: string
    year_default: string
    year_options: string[]
    agree_pre: string
    agree_link: string
    agree_post: string
    submit: string
    submitting: string
    success_title: string
    success_body: string
    success_name_label: string
    success_id_label: string
    success_date_label: string
    back_home: string
    error_default: string
    benefits_title: string
    benefits_subtitle_pre: string
    benefits_subtitle_price: string
    benefits_subtitle_post: string
    benefits_cta: string
    benefits_cta_hint: string
    benefits: BenefitItem[]
  }
}

// ─── Vietnamese ──────────────────────────────────────────────────────────────

const vi: T = {
  nav: {
    about: 'Về chúng tôi',
    events: 'Sự kiện',
    faq: 'Câu hỏi thường gặp',
    register: 'Đăng ký thành viên',
    contact: 'Liên hệ',
  },
  home: {
    hero_title: 'Hội Sinh viên Việt Nam tại trường Đại học Đạm Giang',
    hero_subtitle: 'TKU VSA — Hội Sinh viên Việt Nam tại Đại học Tamkang, đồng hành cùng bạn từ ngày đầu đặt chân đến Đài Loan.',
    cta_register: 'Đăng ký thành viên',
    cta_contact: 'Liên hệ ngay',
    who_title: 'Chúng tôi là ai?',
    who_body: 'TKU VSA (淡江越南同學聯誼會) là hội sinh viên Việt Nam tại Đại học Tamkang (淡江大學). Chúng tôi được thành lập với mục tiêu kết nối cộng đồng sinh viên Việt Nam, hỗ trợ các bạn mới nhập học nhanh chóng thích nghi với môi trường học tập và sinh hoạt tại Đài Loan, đồng thời giúp đỡ các bạn hoàn thành các thủ tục hành chính cần thiết.',
    mission_title: 'Sứ mệnh của chúng tôi',
    missions: [
      { title: 'Hỗ trợ học tập', desc: 'Giúp sinh viên tiếp cận tài nguyên học tập, thích nghi nhanh với môi trường đại học tại Đài Loan.' },
      { title: 'Kết nối cộng đồng', desc: 'Xây dựng mạng lưới sinh viên Việt Nam gắn kết, tương trợ nhau trong suốt hành trình du học.' },
      { title: 'Quảng bá văn hoá', desc: 'Lan tỏa nét đẹp văn hoá Việt Nam đến bạn bè quốc tế tại Tamkang University.' },
    ],
    values_title: 'Giá trị cốt lõi',
    values: ['Đoàn Kết', 'Trách Nhiệm', 'Năng Động'],
    vision_title: 'Tầm nhìn',
    vision_body: 'Trở thành cộng đồng sinh viên Việt Nam kiểu mẫu tại Đài Loan, là mái nhà chung ấm áp và bệ phóng vững chắc cho mọi tài năng trẻ.',
    support_title: 'Dành cho tân sinh viên',
    support_subtitle: 'Miễn phí · Không cần là thành viên · Chúng tôi luôn sẵn sàng hỗ trợ',
    support_items: [
      { title: 'Thủ tục ARC', desc: 'Hướng dẫn làm thẻ cư trú (ARC) — giấy tờ đầu tiên bạn cần hoàn thành khi mới đến Đài Loan.' },
      { title: 'Đăng ký NHI', desc: 'Hỗ trợ đăng ký bảo hiểm y tế quốc gia (NHI) — bắt buộc và rất quan trọng cho sinh viên quốc tế.' },
      { title: 'Mở tài khoản ngân hàng', desc: 'Hướng dẫn mở tài khoản ngân hàng tại Đài Loan để nhận học bổng, trả học phí và sinh hoạt hàng ngày.' },
      { title: 'Tìm nhà & phòng trọ', desc: 'Hỗ trợ tìm chỗ ở phù hợp — ký túc xá hay thuê ngoài — cho sinh viên mới chưa quen địa bàn.' },
    ],
    community_title: 'Cộng đồng của chúng tôi',
    community_caption: 'Các thành viên TKU VSA tại sự kiện năm học 2024–2025',
    events_title: 'Sự kiện sắp tới',
    events_empty: 'Chưa có sự kiện nào. Hãy theo dõi chúng tôi để cập nhật mới nhất!',
    contact_title: 'Liên hệ',
  },
  about: {
    hero_title: 'Về chúng tôi',
    hero_subtitle: 'TKU VSA — Hội Sinh viên Việt Nam tại Đại học Tamkang (淡江越南同學聯誼會)',
    who_title: 'Chúng tôi là ai?',
    who_body1: 'TKU VSA (淡江越南同學聯誼會) là hội sinh viên Việt Nam tại Đại học Tamkang (淡江大學), một trong những trường đại học lớn và uy tín tại Đài Loan.',
    who_body2: 'Hội được thành lập với mục tiêu kết nối cộng đồng sinh viên Việt Nam, hỗ trợ các bạn mới nhập học nhanh chóng thích nghi với môi trường học tập và sinh hoạt, đồng thời hỗ trợ hoàn thành các thủ tục hành chính cần thiết khi mới đến Đài Loan.',
    mission_title: 'Sứ mệnh của chúng tôi',
    missions: [
      { title: 'Hỗ trợ học tập', desc: 'Giúp sinh viên tiếp cận tài nguyên học tập, thích nghi nhanh với môi trường đại học tại Đài Loan.' },
      { title: 'Kết nối cộng đồng', desc: 'Xây dựng mạng lưới sinh viên Việt Nam gắn kết, tương trợ nhau trong suốt hành trình du học.' },
      { title: 'Quảng bá văn hoá', desc: 'Lan tỏa nét đẹp văn hoá Việt Nam đến bạn bè quốc tế tại Tamkang University.' },
    ],
    vision_title: 'Tầm nhìn',
    vision_body: 'Trở thành cộng đồng sinh viên Việt Nam kiểu mẫu tại Đài Loan, là mái nhà chung ấm áp và bệ phóng vững chắc cho mọi tài năng trẻ.',
    values_title: 'Giá trị cốt lõi',
    values: ['Đoàn Kết', 'Trách Nhiệm', 'Năng Động'],
    community_title: 'Cộng đồng của chúng tôi',
    community_caption: 'Các thành viên TKU VSA tại sự kiện năm học 2025–2026',
    subnav_intro: 'Giới thiệu',
    subnav_team: 'Ban Chấp hành',
  },
  team: {
    hero_label: 'TKU VSA — Năm học 2025–2026',
    hero_title: 'Ban Chấp Hành',
    hero_subtitle: 'Những con người đứng sau TKU VSA — cùng nhau xây dựng cộng đồng sinh viên Việt Nam tại Tamkang.',
    profile_link: 'Trang cá nhân',
    member_suffix: 'người',
    dept: {
      'Ban Lãnh đạo': 'Ban Lãnh đạo',
      'Ban Cố Vấn': 'Ban Cố Vấn',
      'Ban Nhân sự': 'Ban Nhân sự',
      'Ban Truyền thông': 'Ban Truyền thông',
      'Ban Tài chính & Đối ngoại': 'Ban Tài chính & Đối ngoại',
      'Ban Sự kiện': 'Ban Sự kiện',
    },
    role: {
      'Chủ tịch CLB': 'Chủ tịch CLB',
      'Phó Chủ tịch CLB': 'Phó Chủ tịch CLB',
      'Cố Vấn': 'Cố Vấn',
      'Giáo Sư Hướng Dẫn': 'Giáo Sư Hướng Dẫn',
      'Trưởng ban': 'Trưởng ban',
      'Thành viên': 'Thành viên',
    },
  },
  events: {
    hero_title: 'Sự kiện',
    hero_subtitle: 'Lịch hoạt động dự kiến năm học 2024–2025 và khoảnh khắc từ các sự kiện đã qua.',
    disclaimer: 'Lịch sự kiện mang tính dự kiến, có thể thay đổi. Theo dõi Instagram @tku_vsa để cập nhật mới nhất.',
    sem1_title: 'Học kỳ 1',
    sem1_dates: 'Tháng 9 – Tháng 1',
    sem2_title: 'Học kỳ 2',
    sem2_dates: 'Tháng 2 – Tháng 6',
    optional_label: 'Tuỳ chọn',
    ongoing_label: 'Liên tục',
    gallery_title: 'Khoảnh khắc đáng nhớ',
    gallery_subtitle: 'Một số hình ảnh từ các sự kiện đã tổ chức.',
    gallery_caption: 'Các thành viên TKU VSA — năm học 2024–2025',
    ky1: [
      { title: 'Welcome Party & Orientation', date: 'Tháng 9', desc: 'Chào đón tân sinh viên Việt Nam, giới thiệu hội và hướng dẫn những bước đầu tiên khi đến Đài Loan.' },
      { title: 'Tết Trung Thu', date: 'Tháng 9 – 10', desc: 'Đêm hội Trung Thu cùng cộng đồng sinh viên Việt Nam tại TKU.', optional: true },
      { title: 'Ngày Quốc tế Nam giới', date: '19/11', desc: 'Hoạt động tri ân và giao lưu nhân ngày Quốc tế Nam giới.' },
      { title: 'Hội thao VSATW', date: 'Tháng 11 – 12', desc: 'Giải thể thao của cộng đồng sinh viên Việt Nam tại Đài Loan (VSATW) — sân chơi kết nối liên trường.' },
      { title: 'YEP — Year End Party', date: 'Tháng 12 – 1', desc: 'Bữa tiệc cuối năm, tổng kết học kỳ và gắn kết các thành viên.' },
      { title: 'Workshop Kỹ năng mềm', date: 'Trong kỳ 1', desc: 'Buổi workshop về kỹ năng thuyết trình, làm việc nhóm, quản lý thời gian do các diễn giả khách mời.' },
      { title: 'Nhóm học tập', date: 'Xuyên suốt kỳ 1', desc: 'Nhóm hỗ trợ học tập theo ngành (CS, IB, Finance,...) — anh chị khoá trên giải đáp bài vở, review môn học và giảng viên.', ongoing: true },
    ],
    ky2: [
      { title: 'Ngày Quốc tế Phụ nữ 8/3', date: '08/03', desc: 'Tặng hoa và quà tri ân các thành viên nữ trong hội.' },
      { title: 'Ngày hội Văn hóa TKU', date: 'Tháng 4 – 5', desc: 'Tham gia và đóng góp gian hàng văn hoá Việt Nam tại sự kiện đa văn hoá do trường TKU tổ chức.' },
      { title: 'Ngày hội Thể thao', date: 'Tháng 5', desc: 'Giải thi đấu nội bộ các môn: bóng đá, cầu lông, bóng bàn, bơi lội.' },
      { title: '30/4 – 1/5', date: '30/04 – 01/05', desc: 'Hoạt động kỷ niệm ngày thống nhất đất nước và Quốc tế Lao động.', optional: true },
      { title: 'Xem trực tiếp bóng đá Việt Nam', date: 'Theo lịch thi đấu', desc: 'Tổ chức buổi cổ vũ tập thể khi đội tuyển Việt Nam thi đấu các trận quan trọng.', optional: true },
      { title: 'Workshop Kỹ năng mềm', date: 'Trong kỳ 2', desc: 'Tiếp nối chuỗi workshop kỳ 1 với các chủ đề về định hướng nghề nghiệp và phỏng vấn.' },
      { title: 'Chúc mừng Tốt nghiệp', date: 'Tháng 6', desc: 'Buổi lễ vinh danh và chụp ảnh kỷ niệm cùng các thành viên tốt nghiệp trong năm.' },
      { title: 'Nhóm học tập', date: 'Xuyên suốt kỳ 2', desc: 'Tiếp tục các nhóm hỗ trợ học tập theo ngành, tập trung ôn tập cuối kỳ.', ongoing: true },
    ],
  },
  faq: {
    hero_title: 'Câu hỏi thường gặp',
    hero_subtitle: 'Tổng hợp những thắc mắc phổ biến của sinh viên Việt Nam mới đến Đài Loan và Đại học Tamkang.',
    contact_prompt: 'Không tìm thấy câu trả lời bạn cần?',
    contact_link: 'Nhắn tin cho hội trên Facebook',
    sections: [
      {
        category: 'Về TKU VSA',
        items: [
          { q: 'TKU VSA là gì?', a: 'TKU VSA (淡江越南同學聯誼會) là Hội Sinh viên Việt Nam tại Đại học Tamkang (淡江大學), Đài Loan. Hội được thành lập để kết nối cộng đồng sinh viên Việt Nam, hỗ trợ tân sinh viên thích nghi với môi trường mới và tổ chức các hoạt động văn hoá, học thuật.' },
          { q: 'Ai có thể tham gia hội?', a: 'Tất cả sinh viên mang quốc tịch Việt Nam đang theo học tại Đại học Tamkang — bao gồm đại học, thạc sĩ và tiến sĩ — đều có thể đăng ký thành viên.' },
          { q: 'Phí thành viên là bao nhiêu?', a: '300 NTD mỗi năm học. Phí này dùng để tổ chức sự kiện, in ấn tài liệu và duy trì các hoạt động của hội.' },
          { q: 'Đăng ký thành viên khi nào?', a: 'Hội mở đăng ký vào đầu mỗi năm học, thường trong tháng 9. Bạn có thể điền form trực tuyến trên trang web này hoặc liên hệ trực tiếp với ban chấp hành.' },
          { q: 'Không phải thành viên có được hỗ trợ không?', a: 'Có. Các hỗ trợ cơ bản như hướng dẫn làm ARC, NHI, mở tài khoản ngân hàng và tìm nhà đều miễn phí và không yêu cầu là thành viên. Đây là cam kết của hội với toàn thể cộng đồng sinh viên Việt Nam tại TKU.' },
        ],
      },
      {
        category: 'Thủ tục khi mới đến Đài Loan',
        items: [
          { q: 'Làm thẻ ARC cần giấy tờ gì và mất bao lâu?', a: 'Bạn cần: hộ chiếu còn hạn, visa nhập học, ảnh chân dung nền trắng (2 tấm), giấy xác nhận nhập học từ trường, và phiếu đăng ký hộ khẩu (từ văn phòng ký túc xá hoặc chủ nhà). Nộp tại Văn phòng Di trú (移民署) gần nhất. Thời gian xử lý thường 7–14 ngày làm việc.' },
          { q: 'Đăng ký bảo hiểm y tế NHI như thế nào?', a: 'Sinh viên quốc tế có thể đăng ký NHI (全民健康保險) ngay khi nhập học nếu trường hỗ trợ theo diện tập thể. Nếu không, bạn cần cư trú hợp pháp ít nhất 6 tháng rồi mới đăng ký cá nhân. Hội sẽ hỗ trợ bạn xác định diện phù hợp và đi làm thủ tục.' },
          { q: 'Nên mở tài khoản ngân hàng ở đâu?', a: 'Bưu điện Đài Loan (郵局 / Chunghwa Post) là lựa chọn phổ biến nhất vì thủ tục đơn giản, không yêu cầu số dư tối thiểu và có chi nhánh ngay trong khuôn viên trường. Ngoài ra, E.SUN Bank (玉山銀行) cũng được nhiều sinh viên dùng vì hỗ trợ app tiếng Anh tốt.' },
          { q: 'Chưa có ARC thì làm được gì?', a: 'Trong thời gian chờ ARC, bạn vẫn có thể dùng hộ chiếu + visa để đi lại, mua SIM điện thoại và vào ký túc xá. Tuy nhiên chưa thể mở tài khoản ngân hàng hay đăng ký NHI — vì vậy hãy ưu tiên hoàn thành ARC sớm nhất có thể.' },
        ],
      },
      {
        category: 'Học tập & Sinh hoạt',
        items: [
          { q: 'Tìm phòng trọ ở đâu?', a: 'Bạn có thể tìm trên 591.com.tw (trang cho thuê nhà lớn nhất Đài Loan), các group Facebook của sinh viên Việt tại TKU, hoặc nhờ hội kết nối với anh chị khoá trên đang có phòng trống. Khu vực Tamsui gần trường có nhiều lựa chọn từ 4.000–8.000 NTD/tháng.' },
          { q: 'Ăn uống ở đâu quanh trường?', a: 'Căng tin trường (學生餐廳) trong campus là rẻ nhất, khoảng 60–100 NTD/suất. Ngoài cổng chính có nhiều quán ăn đường phố và trà sữa. Chợ đêm Tamsui (淡水老街) và khu Zhongzheng cách trường ~15 phút xe bus, có nhiều món ngon và đa dạng hơn.' },
          { q: 'Làm thế nào để lấy đủ 3 tín chỉ hoạt động ngoại khóa?', a: 'Đại học Tamkang yêu cầu sinh viên tích lũy điểm hoạt động ngoại khóa. Tham gia các sự kiện chính thức do TKU VSA tổ chức hoặc đồng tổ chức sẽ được ghi nhận điểm. Thành viên hội sẽ nhận chứng nhận hoạt động sau mỗi sự kiện.' },
          { q: 'Có hỗ trợ học tiếng Trung không?', a: 'Hội có mạng lưới anh chị mentor theo từng ngành — nhiều người sẵn sàng hỗ trợ thuật ngữ chuyên ngành, dịch tài liệu và giải thích nội dung bài giảng. Ngoài ra trường cũng có Trung tâm học ngôn ngữ (語言中心) với các khoá tiếng Trung miễn phí hoặc học phí thấp.' },
          { q: 'Đi lại trong thành phố bằng gì?', a: 'MRT (tàu điện ngầm) và xe bus là hai phương tiện chính. Bạn nên làm thẻ EasyCard (悠遊卡) ngay khi đến — mua tại ga MRT hoặc cửa hàng tiện lợi 7-Eleven/FamilyMart. Thẻ này dùng được cho MRT, bus, YouBike (xe đạp công cộng) và cả mua đồ ở cửa hàng tiện lợi.' },
        ],
      },
      {
        category: 'Liên hệ & Khẩn cấp',
        items: [
          { q: 'Cần hỗ trợ gấp thì liên hệ ai?', a: 'Nhắn tin qua trang Facebook của hội tại facebook.com/vsa.tamkang hoặc gửi email tới tku.vsa2026@gmail.com. Trong trường hợp khẩn cấp về y tế, gọi 119 (cấp cứu) hoặc 110 (cảnh sát) — các đường dây này hoạt động 24/7 và có hỗ trợ tiếng Anh.' },
          { q: 'Không nói được tiếng Trung thì có sao không?', a: 'Hoàn toàn không sao trong giai đoạn đầu. Tiếng Anh được dùng khá phổ biến ở Đài Bắc và trong trường đại học. Hội sẽ hỗ trợ phiên dịch khi bạn đi làm thủ tục hoặc cần giao tiếp với cơ quan hành chính.' },
        ],
      },
    ],
  },
  register: {
    title: 'Đăng ký thành viên',
    subtitle: 'Tham gia TKU VSA để kết nối với cộng đồng sinh viên Việt Nam tại Tamkang và nhận hỗ trợ từ những người đi trước.',
    name_label: 'Họ và tên',
    name_placeholder: 'Nguyễn Văn A',
    dob_label: 'Ngày tháng năm sinh',
    id_label: 'Mã sinh viên',
    major_label: 'Ngành học',
    major_placeholder: 'Quản trị kinh doanh, Công nghệ thông tin...',
    email_label: 'Email',
    phone_label: 'Số điện thoại',
    year_label: 'Năm học',
    social_label: 'Trang cá nhân',
    social_placeholder: 'https://facebook.com/... hoặc https://instagram.com/...',
    note_label: 'Ghi chú',
    year_default: '-- Chọn năm học --',
    year_options: ['Năm 1', 'Năm 2', 'Năm 3', 'Năm 4', 'Năm 5+', 'Thạc sĩ', 'Tiến sĩ'],
    agree_pre: 'Tôi đã đọc và đồng ý với',
    agree_link: 'quy chế hoạt động, quyền lợi và nghĩa vụ thành viên',
    agree_post: 'của TKU VSA.',
    submit: 'Đăng ký ngay',
    submitting: 'Đang gửi...',
    success_title: 'Đăng ký thành công!',
    success_body: 'Cảm ơn bạn đã đăng ký tham gia TKU VSA.\nChúng tôi sẽ liên hệ với bạn sớm nhất có thể.',
    success_name_label: 'Họ và tên',
    success_id_label: 'Mã sinh viên',
    success_date_label: 'Ngày đăng ký',
    back_home: 'Về trang chủ',
    error_default: 'Có lỗi xảy ra, vui lòng thử lại.',
    benefits_title: 'Quyền lợi khi tham gia TKU VSA',
    benefits_subtitle_pre: 'Chỉ với',
    benefits_subtitle_price: '300 NTD / năm học',
    benefits_subtitle_post: ', bạn được hưởng toàn bộ quyền lợi dưới đây.',
    benefits_cta: 'Đăng ký ngay',
    benefits_cta_hint: 'Điền form phía trên để hoàn tất đăng ký',
    benefits: [
      { title: '3 tín chỉ ngoại khóa', desc: 'Nhận chứng nhận tham gia từ hội — đủ điều kiện để hoàn thành yêu cầu 3 tín chỉ hoạt động ngoại khóa của nhà trường.' },
      { title: 'Hỗ trợ thủ tục hành chính', desc: 'Được hướng dẫn làm ARC, đăng ký NHI, mở tài khoản ngân hàng và tìm nhà — đặc biệt quan trọng với tân sinh viên mới đến Đài Loan.' },
      { title: 'Tham dự sự kiện của hội', desc: 'Được tham gia toàn bộ sự kiện do hội tổ chức, đồng tổ chức hoặc trong mạng lưới liên kết — từ văn hoá, giải trí đến học thuật.' },
      { title: 'Cộng đồng & kết nối', desc: 'Gia nhập group chat nội bộ, giao lưu với bạn bè cùng chí hướng và kết nối với mạng lưới alumni đang học tập, làm việc tại Đài Loan.' },
      { title: 'Hỗ trợ học tập & mentor', desc: 'Tham gia các group học tập, được anh chị khoá trên làm mentor, chia sẻ kinh nghiệm học tại TKU và thi thoảng có workshop mời giáo sư, chuyên gia.' },
      { title: 'Tài liệu & đề thi cũ', desc: 'Tiếp cận kho tài liệu, đề thi các môn được chia sẻ trong cộng đồng — giúp chuẩn bị tốt hơn cho kỳ thi.' },
    ],
  },
}

// ─── English ─────────────────────────────────────────────────────────────────

const en: T = {
  nav: {
    about: 'About Us',
    events: 'Events',
    faq: 'FAQ',
    register: 'Become a Member',
    contact: 'Contact',
  },
  home: {
    hero_title: 'Vietnamese Student Association at Tamkang University',
    hero_subtitle: 'TKU VSA — Vietnamese Student Association at Tamkang University, here for you from your very first day in Taiwan.',
    cta_register: 'Become a Member',
    cta_contact: 'Contact Us',
    who_title: 'Who are we?',
    who_body: 'TKU VSA (淡江越南同學聯誼會) is the Vietnamese Student Association at Tamkang University (淡江大學). We were founded to connect the Vietnamese student community, help new students quickly adapt to academic life in Taiwan, and assist with necessary administrative procedures.',
    mission_title: 'Our Mission',
    missions: [
      { title: 'Academic Support', desc: 'Help students access learning resources and quickly adapt to university life in Taiwan.' },
      { title: 'Community Connection', desc: 'Build a strong, supportive network of Vietnamese students throughout their study journey.' },
      { title: 'Cultural Promotion', desc: 'Share the beauty of Vietnamese culture with international peers at Tamkang University.' },
    ],
    values_title: 'Core Values',
    values: ['Unity', 'Responsibility', 'Dynamism'],
    vision_title: 'Vision',
    vision_body: 'To become an exemplary Vietnamese student community in Taiwan — a warm shared home and a solid launching pad for every young talent.',
    support_title: 'For New Students',
    support_subtitle: 'Free · No membership required · We are always ready to help',
    support_items: [
      { title: 'ARC Residence Card', desc: 'Guidance on obtaining your ARC — the first document you need to complete when arriving in Taiwan.' },
      { title: 'NHI Health Insurance', desc: 'Assistance with registering for National Health Insurance (NHI) — mandatory and essential for international students.' },
      { title: 'Open a Bank Account', desc: 'Step-by-step help to open a bank account in Taiwan for receiving scholarships, paying tuition, and daily expenses.' },
      { title: 'Find Housing', desc: 'Support finding suitable accommodation — dormitory or off-campus rental — for new students unfamiliar with the area.' },
    ],
    community_title: 'Our Community',
    community_caption: 'TKU VSA members at the 2024–2025 academic year event',
    events_title: 'Upcoming Events',
    events_empty: 'No upcoming events yet. Follow us to stay updated!',
    contact_title: 'Contact',
  },
  about: {
    hero_title: 'About Us',
    hero_subtitle: 'TKU VSA — Vietnamese Student Association at Tamkang University (淡江越南同學聯誼會)',
    who_title: 'Who are we?',
    who_body1: 'TKU VSA (淡江越南同學聯誼會) is the Vietnamese Student Association at Tamkang University (淡江大學), one of the largest and most prestigious universities in Taiwan.',
    who_body2: 'The association was established to connect the Vietnamese student community, help new students quickly adapt to the academic and daily life environment, and assist with all necessary administrative procedures upon arriving in Taiwan.',
    mission_title: 'Our Mission',
    missions: [
      { title: 'Academic Support', desc: 'Help students access learning resources and quickly adapt to university life in Taiwan.' },
      { title: 'Community Connection', desc: 'Build a strong, supportive network of Vietnamese students throughout their study journey.' },
      { title: 'Cultural Promotion', desc: 'Share the beauty of Vietnamese culture with international peers at Tamkang University.' },
    ],
    vision_title: 'Vision',
    vision_body: 'To become an exemplary Vietnamese student community in Taiwan — a warm shared home and a solid launching pad for every young talent.',
    values_title: 'Core Values',
    values: ['Unity', 'Responsibility', 'Dynamism'],
    community_title: 'Our Community',
    community_caption: 'TKU VSA members at the 2025–2026 academic year event',
    subnav_intro: 'About',
    subnav_team: 'Executive Board',
  },
  team: {
    hero_label: 'TKU VSA — Academic Year 2025–2026',
    hero_title: 'Executive Board',
    hero_subtitle: 'The people behind TKU VSA — building the Vietnamese student community at Tamkang together.',
    profile_link: 'Profile',
    member_suffix: 'members',
    dept: {
      'Ban Lãnh đạo': 'Leadership',
      'Ban Cố Vấn': 'Advisory Board',
      'Ban Nhân sự': 'Human Resources',
      'Ban Truyền thông': 'Media & Communications',
      'Ban Tài chính & Đối ngoại': 'Finance & External Affairs',
      'Ban Sự kiện': 'Events',
    },
    role: {
      'Chủ tịch CLB': 'Club President',
      'Phó Chủ tịch CLB': 'Vice President',
      'Cố Vấn': 'Advisor',
      'Giáo Sư Hướng Dẫn': 'Faculty Advisor',
      'Trưởng ban': 'Department Head',
      'Thành viên': 'Member',
    },
  },
  events: {
    hero_title: 'Events',
    hero_subtitle: 'Planned activities for the 2024–2025 academic year and highlights from past events.',
    disclaimer: 'The event schedule is tentative and subject to change. Follow @tku_vsa on Instagram for the latest updates.',
    sem1_title: 'Semester 1',
    sem1_dates: 'September – January',
    sem2_title: 'Semester 2',
    sem2_dates: 'February – June',
    optional_label: 'Optional',
    ongoing_label: 'Ongoing',
    gallery_title: 'Memorable Moments',
    gallery_subtitle: 'Selected photos from past events.',
    gallery_caption: 'TKU VSA members — academic year 2024–2025',
    ky1: [
      { title: 'Welcome Party & Orientation', date: 'September', desc: 'Welcome new Vietnamese students, introduce the association, and guide them through their first steps in Taiwan.' },
      { title: 'Mid-Autumn Festival', date: 'Sep – Oct', desc: 'Mid-Autumn Festival celebration with the Vietnamese student community at TKU.', optional: true },
      { title: "International Men's Day", date: '19 Nov', desc: "Appreciation activities and socializing for International Men's Day." },
      { title: 'VSATW Sports Tournament', date: 'Nov – Dec', desc: 'Inter-university sports tournament for Vietnamese students in Taiwan (VSATW) — a great way to connect across campuses.' },
      { title: 'YEP — Year End Party', date: 'Dec – Jan', desc: 'Year-end party to wrap up the semester and strengthen bonds among members.' },
      { title: 'Soft Skills Workshop', date: 'During Sem 1', desc: 'Workshop on presentation skills, teamwork, and time management led by guest speakers.' },
      { title: 'Study Groups', date: 'Throughout Sem 1', desc: 'Subject-based study support groups (CS, IB, Finance, ...) — seniors answer questions, review courses and professors.', ongoing: true },
    ],
    ky2: [
      { title: "International Women's Day", date: '08 Mar', desc: 'Flowers and gifts to appreciate female members of the association.' },
      { title: 'TKU Cultural Festival', date: 'Apr – May', desc: 'Participate and contribute a Vietnamese cultural booth at the multicultural event organized by TKU.' },
      { title: 'Sports Day', date: 'May', desc: 'Internal tournaments in football, badminton, table tennis, and swimming.' },
      { title: 'April 30 – May 1', date: '30 Apr – 01 May', desc: 'Activities commemorating National Reunification Day and International Labour Day.', optional: true },
      { title: 'Vietnam Football Watch Party', date: 'Match schedule', desc: 'Group viewing session when the Vietnamese national team plays important matches.', optional: true },
      { title: 'Soft Skills Workshop', date: 'During Sem 2', desc: 'Continuing the Sem 1 workshop series with topics on career orientation and interviews.' },
      { title: 'Graduation Ceremony', date: 'June', desc: 'Celebration and commemorative photos with members graduating this year.' },
      { title: 'Study Groups', date: 'Throughout Sem 2', desc: 'Continuing subject-based study groups, focused on final exam preparation.', ongoing: true },
    ],
  },
  faq: {
    hero_title: 'Frequently Asked Questions',
    hero_subtitle: 'Answers to common questions from Vietnamese students new to Taiwan and Tamkang University.',
    contact_prompt: "Can't find the answer you need?",
    contact_link: 'Message us on Facebook',
    sections: [
      {
        category: 'About TKU VSA',
        items: [
          { q: 'What is TKU VSA?', a: 'TKU VSA (淡江越南同學聯誼會) is the Vietnamese Student Association at Tamkang University (淡江大學), Taiwan. It was established to connect the Vietnamese student community, help new students adapt to their new environment, and organize cultural and academic activities.' },
          { q: 'Who can join?', a: 'All Vietnamese students currently enrolled at Tamkang University — including undergraduate, master\'s, and doctoral students — are welcome to register as members.' },
          { q: 'How much is the membership fee?', a: '300 NTD per academic year. This fee is used to organize events, print materials, and sustain association activities.' },
          { q: 'When can I register?', a: 'Registration opens at the beginning of each academic year, usually in September. You can fill out the online form on this website or contact the executive board directly.' },
          { q: 'Can non-members receive support?', a: 'Yes. Basic support such as guidance on ARC, NHI, bank account setup, and housing are free and do not require membership. This is our commitment to the entire Vietnamese student community at TKU.' },
        ],
      },
      {
        category: 'Procedures When Arriving in Taiwan',
        items: [
          { q: 'What documents are needed for ARC and how long does it take?', a: 'You need: a valid passport, student visa, 2 white-background portrait photos, a school enrollment confirmation letter, and a household registration form (from the dorm office or landlord). Submit at the nearest National Immigration Agency (移民署). Processing usually takes 7–14 business days.' },
          { q: 'How do I register for NHI health insurance?', a: 'International students may be able to enroll in NHI (全民健康保險) as a group through the university. Otherwise, you must have legal residence for at least 6 months before individual registration. Our association will help you determine which option applies and accompany you through the process.' },
          { q: 'Where should I open a bank account?', a: 'Chunghwa Post (郵局) is the most popular choice — simple procedures, no minimum balance, and a branch right on campus. E.SUN Bank (玉山銀行) is also favored by many students for its English app support.' },
          { q: "What can I do while waiting for my ARC?", a: 'While waiting for your ARC, you can use your passport and visa to travel, buy a SIM card, and move into the dorm. However, you cannot yet open a bank account or register for NHI — so prioritize completing your ARC as soon as possible.' },
        ],
      },
      {
        category: 'Study & Daily Life',
        items: [
          { q: 'Where can I find an apartment?', a: 'You can search on 591.com.tw (Taiwan\'s largest rental platform), Vietnamese student Facebook groups at TKU, or ask the association to connect you with seniors who have available rooms. The Tamsui area near campus has options ranging from 4,000–8,000 NTD/month.' },
          { q: 'Where should I eat near campus?', a: 'The campus cafeteria (學生餐廳) is the cheapest option at around 60–100 NTD per meal. Outside the main gate there are many street food vendors and bubble tea shops. Tamsui Old Street (淡水老街) and the Zhongzheng district are about 15 minutes by bus and offer more variety.' },
          { q: 'How do I earn the required 3 extracurricular credits?', a: 'Tamkang University requires students to accumulate extracurricular activity points. Participating in official TKU VSA events will count toward this requirement. Members receive an activity certificate after each event.' },
          { q: 'Is there support for learning Chinese?', a: 'The association has a mentor network organized by academic major — many are willing to help with terminology, document translation, and explaining lecture content. The university also has a Language Center (語言中心) offering free or low-cost Chinese language courses.' },
          { q: 'How do I get around the city?', a: 'The MRT (metro) and bus are the two main options. Get an EasyCard (悠遊卡) as soon as you arrive — available at MRT stations or convenience stores like 7-Eleven and FamilyMart. It works for the MRT, buses, YouBike (public bicycles), and even purchases at convenience stores.' },
        ],
      },
      {
        category: 'Contact & Emergency',
        items: [
          { q: 'Who should I contact in an urgent situation?', a: 'Message the association\'s Facebook page at facebook.com/vsa.tamkang or email tku.vsa2026@gmail.com. For medical emergencies, call 119 (ambulance) or 110 (police) — both operate 24/7 with English support.' },
          { q: "Is it okay if I don't speak Chinese?", a: "Absolutely fine in the beginning. English is widely used in Taipei and at the university. The association will provide translation support when you need to handle administrative procedures or communicate with government offices." },
        ],
      },
    ],
  },
  register: {
    title: 'Become a Member',
    subtitle: 'Join TKU VSA to connect with the Vietnamese student community at Tamkang and receive support from those who have been there.',
    name_label: 'Full Name',
    name_placeholder: 'John Doe',
    dob_label: 'Date of Birth',
    id_label: 'Student ID',
    major_label: 'Major',
    major_placeholder: 'Business Administration, Computer Science...',
    email_label: 'Email',
    phone_label: 'Phone Number',
    year_label: 'Year of Study',
    social_label: 'Social Profile',
    social_placeholder: 'https://facebook.com/... or https://instagram.com/...',
    note_label: 'Notes',
    year_default: '-- Select year --',
    year_options: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5+', "Master's", 'Doctorate'],
    agree_pre: 'I have read and agree to the',
    agree_link: 'membership rules, rights, and obligations',
    agree_post: 'of TKU VSA.',
    submit: 'Register Now',
    submitting: 'Submitting...',
    success_title: 'Registration Successful!',
    success_body: 'Thank you for joining TKU VSA.\nWe will get in touch with you as soon as possible.',
    success_name_label: 'Full Name',
    success_id_label: 'Student ID',
    success_date_label: 'Registration Date',
    back_home: 'Back to Home',
    error_default: 'An error occurred. Please try again.',
    benefits_title: 'Member Benefits',
    benefits_subtitle_pre: 'For just',
    benefits_subtitle_price: '300 NTD / academic year',
    benefits_subtitle_post: ', you get all the benefits below.',
    benefits_cta: 'Register Now',
    benefits_cta_hint: 'Fill in the form above to complete registration',
    benefits: [
      { title: '3 Extracurricular Credits', desc: 'Receive a participation certificate from the association — qualifying you to fulfill the 3 extracurricular credit requirement of the university.' },
      { title: 'Administrative Assistance', desc: 'Get guided through ARC, NHI, bank account, and housing procedures — especially important for new students arriving in Taiwan.' },
      { title: 'Access to Association Events', desc: 'Attend all events organized, co-organized, or affiliated with the association — from cultural and social to academic activities.' },
      { title: 'Community & Networking', desc: 'Join the internal group chat, connect with like-minded peers, and build ties with alumni studying and working in Taiwan.' },
      { title: 'Academic Support & Mentoring', desc: 'Join study groups, get mentored by seniors, share experiences at TKU, and occasionally attend workshops with professors and industry experts.' },
      { title: 'Study Materials & Past Exams', desc: 'Access a shared library of course materials and past exam papers — helping you prepare better for tests.' },
    ],
  },
}

// ─── Traditional Chinese ─────────────────────────────────────────────────────

const zh: T = {
  nav: {
    about: '關於我們',
    events: '活動',
    faq: '常見問題',
    register: '加入會員',
    contact: '聯絡我們',
  },
  home: {
    hero_title: '淡江大學越南同學聯誼會',
    hero_subtitle: 'TKU VSA — 淡江大學越南同學聯誼會，從你踏上台灣的第一天起，陪伴你左右。',
    cta_register: '加入會員',
    cta_contact: '立即聯絡',
    who_title: '我們是誰？',
    who_body: 'TKU VSA（淡江越南同學聯誼會）是淡江大學越南留學生組成的聯誼會。我們的成立宗旨是連結越南留學生社群，協助新生迅速適應台灣的學習與生活環境，並協助完成必要的行政手續。',
    mission_title: '我們的使命',
    missions: [
      { title: '學習支持', desc: '協助學生取得學習資源，快速適應台灣的大學環境。' },
      { title: '社群連結', desc: '建立緊密互助的越南留學生網絡，相互扶持，共同成長。' },
      { title: '文化推廣', desc: '將越南文化之美傳遞給淡江大學的各國同學。' },
    ],
    values_title: '核心價值',
    values: ['團結', '責任', '積極'],
    vision_title: '願景',
    vision_body: '成為台灣越南留學生的典範社群，打造溫暖的共同家園與每位年輕才俊的堅實起飛平台。',
    support_title: '給新生的支持',
    support_subtitle: '免費 · 無需成為會員 · 我們隨時準備好協助你',
    support_items: [
      { title: 'ARC 居留證辦理', desc: '指導辦理外僑居留證（ARC）——這是你抵達台灣後最需要完成的第一份文件。' },
      { title: '健保（NHI）申請', desc: '協助申請全民健康保險（NHI）——對國際學生而言是必要且非常重要的手續。' },
      { title: '開立銀行帳戶', desc: '一步步引導你在台灣開戶，方便領取獎學金、繳交學費及日常生活使用。' },
      { title: '找房子', desc: '協助尋找合適住所——宿舍或校外租屋——幫助不熟悉環境的新生安頓下來。' },
    ],
    community_title: '我們的社群',
    community_caption: 'TKU VSA 成員於 2024–2025 學年度活動合影',
    events_title: '近期活動',
    events_empty: '目前尚無近期活動。請追蹤我們以取得最新消息！',
    contact_title: '聯絡我們',
  },
  about: {
    hero_title: '關於我們',
    hero_subtitle: 'TKU VSA — 淡江大學越南同學聯誼會（淡江越南同學聯誼會）',
    who_title: '我們是誰？',
    who_body1: 'TKU VSA 是淡江大學的越南留學生聯誼會，淡江大學是台灣規模最大、最具聲望的大學之一。',
    who_body2: '本會的成立宗旨是連結越南留學生社群，協助新生迅速適應台灣的學習與生活環境，並協助完成抵台後所需的各項行政手續。',
    mission_title: '我們的使命',
    missions: [
      { title: '學習支持', desc: '協助學生取得學習資源，快速適應台灣的大學環境。' },
      { title: '社群連結', desc: '建立緊密互助的越南留學生網絡，相互扶持，共同成長。' },
      { title: '文化推廣', desc: '將越南文化之美傳遞給淡江大學的各國同學。' },
    ],
    vision_title: '願景',
    vision_body: '成為台灣越南留學生的典範社群，打造溫暖的共同家園與每位年輕才俊的堅實起飛平台。',
    values_title: '核心價值',
    values: ['團結', '責任', '積極'],
    community_title: '我們的社群',
    community_caption: 'TKU VSA 成員於 2025–2026 學年度活動合影',
    subnav_intro: '關於我們',
    subnav_team: '執行委員會',
  },
  team: {
    hero_label: 'TKU VSA — 2025–2026 學年度',
    hero_title: '執行委員會',
    hero_subtitle: '推動 TKU VSA 的幕後成員——攜手打造淡江大學越南留學生社群。',
    profile_link: '個人主頁',
    member_suffix: '人',
    dept: {
      'Ban Lãnh đạo': '領導班子',
      'Ban Cố Vấn': '顧問團',
      'Ban Nhân sự': '人事部',
      'Ban Truyền thông': '媒體與傳播部',
      'Ban Tài chính & Đối ngoại': '財務與對外事務部',
      'Ban Sự kiện': '活動部',
    },
    role: {
      'Chủ tịch CLB': '會長',
      'Phó Chủ tịch CLB': '副會長',
      'Cố Vấn': '顧問',
      'Giáo Sư Hướng Dẫn': '指導教授',
      'Trưởng ban': '部長',
      'Thành viên': '幹部',
    },
  },
  events: {
    hero_title: '活動',
    hero_subtitle: '2024–2025 學年度預定活動行程及過往活動精彩回顧。',
    disclaimer: '活動行程僅供參考，可能有所調整。請追蹤 Instagram @tku_vsa 以取得最新消息。',
    sem1_title: '第一學期',
    sem1_dates: '九月 – 一月',
    sem2_title: '第二學期',
    sem2_dates: '二月 – 六月',
    optional_label: '選擇性',
    ongoing_label: '持續進行',
    gallery_title: '難忘時刻',
    gallery_subtitle: '過往活動精選照片。',
    gallery_caption: 'TKU VSA 成員 — 2024–2025 學年度',
    ky1: [
      { title: '新生歡迎會暨說明會', date: '九月', desc: '歡迎越南新生，介紹聯誼會，並指引抵台後的第一步。' },
      { title: '中秋節慶典', date: '九～十月', desc: 'TKU 越南留學生社群共慶中秋節。', optional: true },
      { title: '國際男性日', date: '11/19', desc: '國際男性日感恩交流活動。' },
      { title: 'VSATW 體育競技賽', date: '十一～十二月', desc: '在台越南留學生體育競技賽（VSATW）——跨校交流的最佳舞台。' },
      { title: 'YEP — 年終派對', date: '十二月 – 一月', desc: '學期末年終派對，總結學期成果，凝聚成員情誼。' },
      { title: '軟技能工作坊', date: '第一學期期間', desc: '由特邀講師主持，內容涵蓋簡報、團隊合作與時間管理技巧。' },
      { title: '學習小組', date: '第一學期全程', desc: '依學系分組的學習支持團體（資工、國企、財金……），由學長姐解惑、評析課程與授課教師。', ongoing: true },
    ],
    ky2: [
      { title: '三八婦女節', date: '03/08', desc: '致贈花束與禮物，感謝聯誼會中的女性成員。' },
      { title: 'TKU 文化節', date: '四～五月', desc: '參與並設立越南文化攤位，共襄淡江大學多元文化盛會。' },
      { title: '運動會', date: '五月', desc: '舉辦足球、羽球、桌球、游泳等內部競技賽事。' },
      { title: '4/30 – 5/1', date: '04/30 – 05/01', desc: '紀念越南統一日及國際勞動節相關活動。', optional: true },
      { title: '越南足球聯播活動', date: '依賽程', desc: '越南國家隊重要賽事集體觀賞應援活動。', optional: true },
      { title: '軟技能工作坊', date: '第二學期期間', desc: '延續第一學期工作坊系列，主題聚焦職涯規劃與面試技巧。' },
      { title: '畢業慶典', date: '六月', desc: '表揚今年畢業成員，共同留下珍貴紀念照。' },
      { title: '學習小組', date: '第二學期全程', desc: '延續各學系學習支持小組，重點協助期末考前複習。', ongoing: true },
    ],
  },
  faq: {
    hero_title: '常見問題',
    hero_subtitle: '整理越南新生抵台及就讀淡江大學時最常提出的問題與解答。',
    contact_prompt: '找不到你需要的答案？',
    contact_link: '在 Facebook 上傳訊給我們',
    sections: [
      {
        category: '關於 TKU VSA',
        items: [
          { q: 'TKU VSA 是什麼？', a: 'TKU VSA（淡江越南同學聯誼會）是台灣淡江大學的越南留學生聯誼會。本會成立目的是連結越南留學生社群、協助新生適應新環境，並舉辦文化與學術交流活動。' },
          { q: '誰可以加入？', a: '所有目前就讀淡江大學的越南籍學生——包含大學部、碩士及博士班——均可報名成為會員。' },
          { q: '會費是多少？', a: '每學年 300 NTD。會費用於舉辦活動、印製資料及維持聯誼會日常運作。' },
          { q: '何時可以報名？', a: '聯誼會於每學年初開放報名，通常在九月份。你可以在本網站填寫線上表單，或直接聯絡幹部。' },
          { q: '非會員也可以獲得協助嗎？', a: '可以。辦理 ARC、NHI、開戶及找房子等基本協助均免費提供，無需成為會員。這是本會對全體在台灣就讀淡江大學的越南留學生的承諾。' },
        ],
      },
      {
        category: '抵台行政手續',
        items: [
          { q: '辦理 ARC 需要哪些文件？需要多久？', a: '你需要準備：有效護照、入學簽證、白底證件照 2 張、學校核發的入學確認函，以及戶籍登記申請表（由宿舍管理辦公室或房東提供）。前往最近的移民署辦理，處理時間通常為 7–14 個工作天。' },
          { q: '如何申請全民健康保險（NHI）？', a: '國際學生若學校有安排，入學時即可以集體方式加入健保（全民健康保險）。若無，則須合法居留滿 6 個月後才能以個人身份申請。本會將協助你判斷適用的方式並陪同辦理手續。' },
          { q: '建議在哪裡開銀行帳戶？', a: '中華郵政（郵局）是最受歡迎的選擇，手續簡便、無最低存款要求，且校園內設有郵局。玉山銀行（E.SUN Bank）也廣受學生喜愛，因為其 App 英文介面支援良好。' },
          { q: '尚未取得 ARC 時能做什麼？', a: '等待 ARC 期間，你仍可使用護照加簽證出行、購買 SIM 卡及入住宿舍。但尚無法開立銀行帳戶或申請健保——因此請盡早完成 ARC 辦理。' },
        ],
      },
      {
        category: '學習與日常生活',
        items: [
          { q: '在哪裡找租屋？', a: '可透過 591.com.tw（台灣最大租屋平台）、TKU 越南留學生 Facebook 社團搜尋，或請聯誼會協助聯繫有空房的學長姐。淡水校區附近租金約 4,000–8,000 NTD/月。' },
          { q: '學校附近哪裡吃飯？', a: '校內學生餐廳（學生餐廳）最為便宜，每餐約 60–100 NTD。正門外有許多路邊攤和手搖飲料店。淡水老街和中正商圈距校約 15 分鐘公車車程，選擇更多元。' },
          { q: '如何取得 3 學分的課外活動學分？', a: '淡江大學要求學生累積課外活動點數。參加 TKU VSA 主辦或協辦的正式活動均可獲得認定。成員每次活動後將取得活動參與證明。' },
          { q: '有中文學習支援嗎？', a: '聯誼會依學系建立學長姐導師網絡，許多人樂意協助專業術語、文件翻譯及課程內容解說。此外，學校語言中心（語言中心）亦提供免費或低費用的中文課程。' },
          { q: '市內交通怎麼搭？', a: '捷運（MRT）和公車是兩大主要交通工具。抵台後請盡快辦理悠遊卡（EasyCard）——可在捷運站或 7-Eleven、全家便利商店購買。悠遊卡適用於捷運、公車、YouBike（公共腳踏車），也可在便利商店消費。' },
        ],
      },
      {
        category: '聯絡與緊急狀況',
        items: [
          { q: '緊急情況應聯絡誰？', a: '請透過 facebook.com/vsa.tamkang 傳訊給本會 Facebook 專頁，或寄信至 tku.vsa2026@gmail.com。若遇醫療緊急狀況，請撥打 119（救護車）或 110（警察）——兩者均 24/7 全天候運作，並提供英語服務。' },
          { q: '不會說中文沒關係嗎？', a: '初期完全沒問題。英語在台北及大學校園內相當普及。本會在你辦理手續或需要與政府機關溝通時，將提供翻譯協助。' },
        ],
      },
    ],
  },
  register: {
    title: '加入會員',
    subtitle: '加入 TKU VSA，與淡江大學的越南留學生社群建立連結，並獲得前人的支持與協助。',
    name_label: '姓名',
    name_placeholder: '王小明',
    dob_label: '出生日期',
    id_label: '學號',
    major_label: '科系',
    major_placeholder: '企業管理、資訊工程...',
    email_label: 'Email',
    phone_label: '電話號碼',
    year_label: '就讀年級',
    social_label: '個人主頁',
    social_placeholder: 'https://facebook.com/... 或 https://instagram.com/...',
    note_label: '備註',
    year_default: '-- 請選擇年級 --',
    year_options: ['大一', '大二', '大三', '大四', '大五以上', '碩士', '博士'],
    agree_pre: '我已閱讀並同意 TKU VSA 的',
    agree_link: '組織規章、會員權利與義務',
    agree_post: '。',
    submit: '立即報名',
    submitting: '送出中...',
    success_title: '報名成功！',
    success_body: '感謝你加入 TKU VSA。\n我們將盡快與你聯繫。',
    success_name_label: '姓名',
    success_id_label: '學號',
    success_date_label: '報名日期',
    back_home: '回到首頁',
    error_default: '發生錯誤，請再試一次。',
    benefits_title: '加入 TKU VSA 的會員福利',
    benefits_subtitle_pre: '只需',
    benefits_subtitle_price: '每學年 300 NTD',
    benefits_subtitle_post: '，即可享有以下所有會員福利。',
    benefits_cta: '立即報名',
    benefits_cta_hint: '填寫上方表單即可完成報名',
    benefits: [
      { title: '3 學分課外活動認定', desc: '取得聯誼會參與證明——符合學校 3 學分課外活動要求的資格。' },
      { title: '行政手續協助', desc: '獲得 ARC、健保、銀行開戶及找房子的全程指引——對初抵台灣的新生尤為重要。' },
      { title: '參加聯誼會活動', desc: '參與聯誼會主辦、協辦及合作網絡的所有活動——涵蓋文化、娛樂至學術等各類型。' },
      { title: '社群與人脈', desc: '加入內部群組，與志同道合的同學交流，並與在台灣就學、工作的校友建立連結。' },
      { title: '學習支援與導師陪伴', desc: '加入學習小組，獲得學長姐導師指導，分享在 TKU 的學習經驗，並不定期參加教授或業界專家工作坊。' },
      { title: '學習資料與歷屆考題', desc: '取得社群共享的課程資料與歷屆考題庫——讓你更有準備地迎接考試。' },
    ],
  },
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const translations: Record<Lang, T> = { vi, en, zh }
export type Translations = T
