import type {
  NavLink,
  HeroSlide,
  StatItem,
  ActivityItem,
  GalleryImage,
  NewsItem,
  TeamMember,
  Value,
  FaqItem,
  ShopItem,
} from "@/types/content";

export const site = {
  title: "台灣健康空氣行動聯盟",
  subtitle: "Air Clean Taiwan",
  tagline: "乾淨的空氣，是每個人的基本權利",
  description:
    "台灣健康空氣行動聯盟（ACT）是一個致力於改善台灣空氣品質的公民社會組織。我們透過政策倡議、社區教育與科學監測，推動台灣走向更乾淨的空氣未來。",
};

export const navLinks: NavLink[] = [
  { label: "首頁", href: "/" },
  { label: "最新消息", href: "/news" },
  { label: "關於我們", href: "/about" },
  { label: "常見問題", href: "/faq" },
  { label: "響應商品", href: "/shop" },
  { label: "聯絡我們", href: "/contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80&auto=format&fit=crop",
    title: "乾淨的空氣",
    subtitle: "是每個人的基本權利",
    description:
      "加入超過 3 萬名關心空氣品質的台灣公民，一起推動政策改變。",
    cta_primary: "立即加入",
    cta_secondary: "了解更多",
  },
  {
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1920&q=80&auto=format&fit=crop",
    title: "科學監測",
    subtitle: "守護你的健康",
    description: "即時 PM2.5 監測數據，讓你隨時掌握身邊的空氣狀況。",
    cta_primary: "查看數據",
    cta_secondary: "認識 PM2.5",
  },
  {
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1920&q=80&auto=format&fit=crop",
    title: "政策倡議",
    subtitle: "改變從聲音開始",
    description: "我們持續推動更嚴格的排放標準，讓每一口呼吸更安心。",
    cta_primary: "支持我們",
    cta_secondary: "倡議成果",
  },
];

export const stats: StatItem[] = [
  { number: "3 萬+", label: "聯盟成員" },
  { number: "12 年", label: "倡議歷史" },
  { number: "47 項", label: "政策推動" },
  { number: "200+", label: "合作組織" },
];

export const activities: ActivityItem[] = [
  {
    date: "2026-05-10",
    title: "2026 全台空氣品質市民論壇",
    location: "台北市 中山紀念堂",
    description:
      "邀請環保署官員、學者與市民代表，共同討論台灣空污防制政策方向。",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80&auto=format&fit=crop",
    tag: "論壇",
  },
  {
    date: "2026-05-03",
    title: "中南部工業區空污踏查行動",
    location: "台中市 大里區",
    description:
      "志工隊深入工業區周邊社區，蒐集居民陳情資料，準備提送環保署。",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&q=80&auto=format&fit=crop",
    tag: "田野調查",
  },
  {
    date: "2026-04-26",
    title: "親子淨山暨空氣監測體驗日",
    location: "新北市 汐止區",
    description:
      "結合健行與環境教育，讓下一代從小建立空氣品質意識。",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80&auto=format&fit=crop",
    tag: "教育活動",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&q=80&auto=format&fit=crop", alt: "市民走上街頭倡議乾淨空氣" },
  { src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&q=80&auto=format&fit=crop", alt: "志工在社區架設空氣監測站" },
  { src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80&auto=format&fit=crop", alt: "親子參與環境教育活動" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80&auto=format&fit=crop", alt: "政策說明會與民眾互動" },
  { src: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?w=400&q=80&auto=format&fit=crop", alt: "聯盟代表出席立法院公聽會" },
  { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80&auto=format&fit=crop", alt: "南台灣空污踏查紀錄" },
];

export const news: NewsItem[] = [
  {
    id: "1",
    date: "2026-04-18",
    category: "政策動態",
    title:
      "環保署修正《空氣污染防制法》施行細則，ACT 提出三點回應",
    excerpt:
      "環保署本週公告《空氣污染防制法施行細則》修正草案，ACT 研究部門分析後，對其中排放標準放寬條款提出嚴正關切，並要求公開說明理由。",
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&q=80&auto=format&fit=crop",
    slug: "epa-revision-act-response",
  },
  {
    id: "2",
    date: "2026-04-10",
    category: "科學研究",
    title:
      "最新研究：台灣 PM2.5 年均濃度雖下降，但仍為 WHO 標準 3 倍",
    excerpt:
      "台大公衛學院與 ACT 合作的年度報告顯示，2025 年全台 PM2.5 年均值為 15.2 μg/m³，較前年下降 8%，但仍是 WHO 建議值 5 μg/m³ 的三倍以上。",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80&auto=format&fit=crop",
    slug: "pm25-annual-report-2025",
  },
  {
    id: "3",
    date: "2026-03-28",
    category: "倡議行動",
    title: "全台 23 縣市同步行動，「空氣正義周」正式啟動",
    excerpt:
      "ACT 聯合全台 200 個公民團體，在 2026 年環境保護日前後舉辦「空氣正義周」系列活動，訴求政府落實減碳承諾。",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&q=80&auto=format&fit=crop",
    slug: "air-justice-week-2026",
  },
  {
    id: "4",
    date: "2026-03-15",
    category: "組織新聞",
    title: "ACT 正式加入「東南亞乾淨空氣聯盟」，接軌國際倡議",
    excerpt:
      "台灣健康空氣行動聯盟獲邀成為 SEACA（東南亞乾淨空氣聯盟）正式成員，將代表台灣公民社會參與區域性政策對話。",
    image: "https://images.unsplash.com/photo-1463171515643-952cee54d42a?w=800&q=80&auto=format&fit=crop",
    slug: "seaca-membership",
  },
];

export const about = {
  title: "關於我們",
  mission_title: "我們的使命",
  mission:
    "透過公民倡議、科學監測與教育推廣，推動台灣空氣品質達到國際標準，保障每位台灣居民呼吸乾淨空氣的基本權利。",
  story_title: "我們的故事",
  story: `2014 年，一群憂心台灣空氣污染問題的公民、學者與環境律師，在台中市成立了台灣健康空氣行動聯盟（ACT）。

那一年，台灣中南部的 PM2.5 年均值高達 28 μg/m³，是 WHO 標準的近六倍。家長們不敢讓孩子在戶外玩耍，醫院的呼吸道門診人滿為患。

十二年來，我們推動了《空氣污染防制法》修正、協助設立全台最密集的公民監測網、組訓超過一千名空氣品質志工。空氣確實變得好一點，但距離每個人都能安心呼吸的目標，還有很長的路。

我們不停歇。`,
  values: [
    {
      icon: "leaf",
      title: "科學為本",
      description: "所有倡議都以嚴謹的科學數據為基礎，不誇大、不失真。",
    },
    {
      icon: "users",
      title: "公民參與",
      description:
        "政策改變需要公民的力量，我們提供平台讓每個人都能發聲。",
    },
    {
      icon: "shield",
      title: "政策倡議",
      description:
        "積極與政府、企業對話，推動法規與標準向世界水準靠攏。",
    },
    {
      icon: "heart",
      title: "健康優先",
      description:
        "空氣品質不只是環境議題，更是公共衛生與社會正義問題。",
    },
  ] as Value[],
  team: [
    {
      name: "陳美玲",
      title: "理事長",
      bio: "台大環境工程博士，曾任行政院環保署顧問，投入空污防制工作逾 20 年。",
    },
    {
      name: "林俊宏",
      title: "執行長",
      bio: "法律背景，專注環境訴訟與政策倡議，協助草擬多項空污相關修法。",
    },
    {
      name: "吳雅惠",
      title: "研究部主任",
      bio: "成大環境科學碩士，主導全台公民空氣監測網絡建置與數據分析。",
    },
    {
      name: "張文正",
      title: "社區組織部主任",
      bio: "長期深耕中南部社區工作，在彰化、雲林、嘉義建立完整倡議網絡。",
    },
  ] as TeamMember[],
};

export const faq: FaqItem[] = [
  {
    question: "如何加入 ACT 成為會員？",
    answer:
      "填寫聯絡我們頁面的表單，選擇「申請成為會員」，我們的秘書處將在 3 個工作天內與您聯繫，說明後續流程。個人年費為新台幣 600 元，學生優惠 300 元。",
  },
  {
    question: "PM2.5 是什麼？對健康有何影響？",
    answer:
      "PM2.5 指空氣中直徑小於或等於 2.5 微米的懸浮微粒。因為極細小，能穿透人體的肺泡屏障直接進入血液，長期暴露與心血管疾病、肺癌、呼吸道慢性病等高度相關。WHO 建議年均值不超過 5 μg/m³，台灣目前法定標準為 15 μg/m³。",
  },
  {
    question: "我可以如何協助 ACT 的工作？",
    answer:
      "有多種方式可以支持：（1）成為付費會員，支持日常運作；（2）捐款協助特定計畫；（3）報名志工，參與監測站維護與社區活動；（4）在社群媒體分享我們的倡議資訊，擴大聲量。",
  },
  {
    question: "ACT 的財務如何公開透明？",
    answer:
      "我們每年發布完整的財務報告，可在官網下載。所有捐款與公費補助均列入正式帳冊，並由獨立會計師查核。我們也定期在理監事會議後公開會議記錄。",
  },
  {
    question: "你們的監測數據和 AQI 官方數據一樣嗎？",
    answer:
      "我們的公民監測網使用低成本感測器，精度較官方設備稍低，但覆蓋率更廣，能補足官方測站的空白。數據供參考與趨勢分析使用，如需精確法規依據，請以環保署官方數據為準。",
  },
  {
    question: "企業或學校如何與 ACT 合作？",
    answer:
      "歡迎洽談各種合作方案，包括：環境教育講座進駐、監測站協作、企業社會責任計畫等。請透過聯絡我們頁面說明合作意向，我們將安排專人回覆。",
  },
];

export const shop = {
  title: "響應商品",
  subtitle: "每件商品都是支持乾淨空氣的行動",
  description:
    "購買響應商品，收入的 50% 直接回饋 ACT 的倡議計畫。讓日常生活成為改變的力量。",
  items: [
    {
      id: "p1",
      name: "ACT 有機棉環保袋",
      price: 350,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80&auto=format&fit=crop",
      description:
        "100% 有機棉製，可重複使用，減少塑膠垃圾。印有 ACT 標誌與「乾淨的空氣，是每個人的基本權利」字樣。",
      tag: "熱銷",
    },
    {
      id: "p2",
      name: "空氣品質教育手冊",
      price: 150,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80&auto=format&fit=crop",
      description:
        "30 頁全彩印刷，以圖解方式說明 PM2.5 成因、健康影響與自我防護。適合家庭、學校收藏。",
      tag: "教育",
    },
    {
      id: "p3",
      name: "ACT 倡議徽章組（3入）",
      price: 200,
      image: "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?w=400&q=80&auto=format&fit=crop",
      description:
        "金屬製可別針徽章，設計包含：「Clean Air Now」、樹葉呼吸圖案、ACT 標誌。",
      tag: "限量",
    },
    {
      id: "p4",
      name: "志工防護口罩（10片）",
      price: 280,
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&q=80&auto=format&fit=crop",
      description:
        "N95 等級防護，ACT 認證款。適合高污染日或戶外田野調查使用。",
      tag: "實用",
    },
    {
      id: "p5",
      name: "台灣空氣品質年曆 2027",
      price: 380,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&auto=format&fit=crop",
      description:
        "以 12 個月份呈現全台各縣市年度空氣品質變化，搭配倡議行動歷史照片。",
      tag: "新品",
    },
    {
      id: "p6",
      name: "綠葉不鏽鋼吸管組",
      price: 320,
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&q=80&auto=format&fit=crop",
      description:
        "304 不鏽鋼，附清潔刷與棉質收納袋。減塑從每一口飲料開始。",
      tag: "環保",
    },
  ] as ShopItem[],
};

export const contact = {
  title: "聯絡我們",
  subtitle: "有任何問題或合作意向，歡迎與我們聯繫",
  address: "台中市西區民權路 135 號 8 樓",
  phone: "(04) 2225-3388",
  email: "contact@airclean.tw",
  hours: "週一至週五 09:00–18:00",
  social: {
    facebook: "https://www.facebook.com/airclean.tw",
    instagram: "https://www.instagram.com/airclean_tw",
    youtube: "https://www.youtube.com/@airclean_tw",
    line: "https://line.me/ti/g/airclean_act",
  },
};

export const footer = {
  tagline: "乾淨的空氣，是每個人的基本權利",
  copyright: "© 2026 台灣健康空氣行動聯盟 Air Clean Taiwan. 版權所有。",
  links: [
    { label: "隱私政策", href: "/privacy" },
    { label: "服務條款", href: "/terms" },
    { label: "財務公開", href: "/transparency" },
  ],
};
