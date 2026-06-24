export const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "id", label: "ID", name: "Indonesia" },
  { code: "ja", label: "JP", name: "Japanese" },
  { code: "zh", label: "中文", name: "Chinese" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const homeContent = {
  en: {
    nav: {
      about: "About",
      proof: "Proof",
      work: "What I Do",
      contact: "Contact",
      cta: "Let's talk",
      language: "Language",
    },
    hero: {
      location: "Jakarta, Indonesia",
      availability: "Open to build something meaningful",
      intro: "Hello, I'm Geraldo.",
      titleTop: "Full-stack",
      titleBottom: "Engineer",
      description:
        "A full-stack engineer with a strong frontend focus, building production-ready digital products since November 2020.",
      workLinkLabel: "See what I do",
      experienceLabel: "Experience",
      yearsSuffix: "Years",
      focusLabel: "Primary focus",
      focusValue: "Frontend",
      modeLabel: "Current mode:",
      modeValue: "Building with intent",
    },
    about: {
      eyebrow: "About me",
      titleTop: "FULL-STACK BY EXPERIENCE.",
      titleBottom: "FRONTEND BY INSTINCT.",
      paragraphs: [
        "I began my professional journey in November 2020. Working across the stack has given me a practical understanding of how complete products are designed, built, and maintained.",
        "Frontend engineering remains my primary focus, where architecture, visual detail, performance, and user experience come together.",
      ],
      principles: [
        ["01", "Think clearly", "Understanding the problem before committing to a solution."],
        ["02", "Build thoughtfully", "Writing maintainable code with attention to every detail."],
        ["03", "Learn continuously", "Staying adaptable through deliberate, hands-on learning."],
      ],
    },
    proof: {
      eyebrow: "Proof of work",
      titleTop: "Production work.",
      titleBottom: "Validated learning.",
      description:
        "A mix of production systems, confidential backoffice delivery, a critical web product, and structured Dicoding learning paths.",
      openWebsite: "Open website",
      confidentialWork: "Confidential work",
      githubRepo: "GitHub repo",
      certificate: "Certificate",
      professional: [
        {
          label: "Confidential systems",
          title: "Backoffice platforms",
          description:
            "Delivered multiple internal backoffice projects where reliability, maintainability, and operational clarity mattered more than public visibility.",
          highlights: ["Internal Tools", "Operational Workflows", "Production Delivery"],
        },
        {
          label: "Critical product",
          title: "M2U Web",
          description:
            "Contributed to Maybank Indonesia's internet banking web platform, supporting a critical user-facing financial product where stability, usability, and production reliability are essential.",
          highlights: ["Internet Banking", "Financial Platform", "Production Reliability"],
        },
      ],
      credentials: [
        {
          title: "React Developer Learning Path",
          provider: "Dicoding Indonesia",
          status: "Completed",
          description:
            "Advanced React learning focused on clean code, Redux state management, automated testing, CI/CD, and practical ecosystem choices.",
          topics: ["Clean Code", "Redux", "Testing", "CI/CD", "React Ecosystem"],
        },
        {
          title: "Backend JavaScript Learning Path",
          provider: "Dicoding Indonesia",
          status: "Completed",
          description:
            "Backend JavaScript learning focused on clean architecture, automated testing, security, scalability, CI/CD, and API documentation.",
          topics: ["Clean Architecture", "Testing", "Security", "Scalability", "API Docs"],
        },
      ],
    },
    work: {
      eyebrow: "What I do",
      title: "Ways I Create.",
      description:
        "The areas where my experience, technical judgment, and curiosity create the most value.",
      projects: [
        {
          title: "Frontend Experiences",
          description:
            "Building polished, responsive interfaces that balance product goals, performance, and maintainable code.",
          tags: ["React", "Vue", "UI Engineering"],
        },
        {
          title: "Full-stack Systems",
          description:
            "Connecting thoughtful frontends to reliable backend services to deliver complete, scalable applications.",
          tags: ["Node.js", "Spring Boot", "API"],
        },
        {
          title: "Learning Experiments",
          description:
            "Exploring new technologies through focused prototypes, technical research, and deliberate experimentation.",
          tags: ["AI", "Prototypes", "Research"],
        },
      ],
    },
    process: {
      eyebrow: "How I work",
      titleTop: "End-to-end context.",
      titleBottom: "Frontend precision.",
      paragraphs: [
        "My full-stack background allows me to make frontend decisions with a clear understanding of APIs, backend constraints, and the broader product architecture.",
        "I focus on building interfaces that are accessible, performant, maintainable, and genuinely useful to the people using them.",
      ],
    },
    footer: {
      eyebrow: "Have an idea?",
      titleTop: "Let's Make",
      titleBottom: "It Real",
      contact: "Contact",
      credit: "Designed & built with intention",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      proof: "Bukti",
      work: "Keahlian",
      contact: "Kontak",
      cta: "Hubungi saya",
      language: "Bahasa",
    },
    hero: {
      location: "Jakarta, Indonesia",
      availability: "Terbuka untuk membangun sesuatu yang bermakna",
      intro: "Halo, saya Geraldo.",
      titleTop: "Full-stack",
      titleBottom: "Engineer",
      description:
        "Full-stack engineer dengan fokus kuat di frontend, membangun produk digital siap produksi sejak November 2020.",
      workLinkLabel: "Lihat yang saya kerjakan",
      experienceLabel: "Pengalaman",
      yearsSuffix: "Tahun",
      focusLabel: "Fokus utama",
      focusValue: "Frontend",
      modeLabel: "Mode saat ini:",
      modeValue: "Membangun dengan tujuan yang jelas",
    },
    about: {
      eyebrow: "Tentang saya",
      titleTop: "FULL-STACK DARI PENGALAMAN.",
      titleBottom: "FRONTEND DARI INSTING.",
      paragraphs: [
        "Saya memulai perjalanan profesional pada November 2020. Pengalaman bekerja di berbagai sisi stack memberi saya pemahaman praktis tentang bagaimana produk lengkap dirancang, dibangun, dan dipelihara.",
        "Frontend engineering tetap menjadi fokus utama saya, tempat arsitektur, detail visual, performa, dan pengalaman pengguna bertemu.",
      ],
      principles: [
        ["01", "Berpikir jernih", "Memahami masalah sebelum menentukan solusi."],
        ["02", "Membangun dengan rapi", "Menulis kode yang maintainable dengan perhatian pada detail."],
        ["03", "Terus belajar", "Tetap adaptif lewat proses belajar yang terarah dan praktis."],
      ],
    },
    proof: {
      eyebrow: "Bukti karya",
      titleTop: "Pengalaman produksi.",
      titleBottom: "Pembelajaran tervalidasi.",
      description:
        "Gabungan pengalaman sistem produksi, backoffice yang bersifat confidential, produk web kritikal, dan learning path Dicoding yang terstruktur.",
      openWebsite: "Buka website",
      confidentialWork: "Pekerjaan confidential",
      githubRepo: "Repo GitHub",
      certificate: "Sertifikat",
      professional: [
        {
          label: "Sistem confidential",
          title: "Platform backoffice",
          description:
            "Mengerjakan beberapa proyek backoffice internal, dengan fokus pada reliability, maintainability, dan kejelasan alur operasional.",
          highlights: ["Internal Tools", "Operational Workflows", "Production Delivery"],
        },
        {
          label: "Produk kritikal",
          title: "M2U Web",
          description:
            "Berkontribusi pada platform internet banking Maybank Indonesia, sebuah produk finansial yang digunakan langsung oleh pengguna dan menuntut stabilitas, usability, serta reliability produksi.",
          highlights: ["Internet Banking", "Financial Platform", "Production Reliability"],
        },
      ],
      credentials: [
        {
          title: "React Developer Learning Path",
          provider: "Dicoding Indonesia",
          status: "Selesai",
          description:
            "Pembelajaran React tingkat lanjut yang berfokus pada clean code, state management dengan Redux, automated testing, CI/CD, dan pemilihan ekosistem React secara praktis.",
          topics: ["Clean Code", "Redux", "Testing", "CI/CD", "React Ecosystem"],
        },
        {
          title: "Backend JavaScript Learning Path",
          provider: "Dicoding Indonesia",
          status: "Selesai",
          description:
            "Pembelajaran Backend JavaScript yang berfokus pada clean architecture, automated testing, security, scalability, CI/CD, dan dokumentasi API.",
          topics: ["Clean Architecture", "Testing", "Security", "Scalability", "API Docs"],
        },
      ],
    },
    work: {
      eyebrow: "Yang saya kerjakan",
      title: "Cara Saya Mencipta.",
      description:
        "Area di mana pengalaman, penilaian teknis, dan rasa ingin tahu saya memberi nilai paling besar.",
      projects: [
        {
          title: "Pengalaman Frontend",
          description:
            "Membangun interface yang rapi, responsif, dan seimbang antara tujuan produk, performa, serta maintainability kode.",
          tags: ["React", "Vue", "UI Engineering"],
        },
        {
          title: "Sistem Full-stack",
          description:
            "Menghubungkan frontend yang matang dengan layanan backend yang andal untuk menghadirkan aplikasi yang lengkap dan scalable.",
          tags: ["Node.js", "Spring Boot", "API"],
        },
        {
          title: "Eksperimen Belajar",
          description:
            "Mengeksplorasi teknologi baru melalui prototipe terarah, riset teknis, dan eksperimen yang disengaja.",
          tags: ["AI", "Prototypes", "Research"],
        },
      ],
    },
    process: {
      eyebrow: "Cara saya bekerja",
      titleTop: "Konteks end-to-end.",
      titleBottom: "Presisi frontend.",
      paragraphs: [
        "Latar belakang full-stack membantu saya mengambil keputusan frontend dengan pemahaman yang jelas terhadap API, batasan backend, dan arsitektur produk secara keseluruhan.",
        "Saya fokus membangun interface yang accessible, performant, maintainable, dan benar-benar berguna bagi orang yang menggunakannya.",
      ],
    },
    footer: {
      eyebrow: "Punya ide?",
      titleTop: "Mari Buat",
      titleBottom: "Jadi Nyata",
      contact: "Kontak",
      credit: "Dirancang & dibangun dengan intensi",
    },
  },
  ja: {
    nav: {
      about: "概要",
      proof: "実績",
      work: "領域",
      contact: "連絡",
      cta: "相談する",
      language: "言語",
    },
    hero: {
      location: "ジャカルタ, インドネシア",
      availability: "価値あるプロダクトづくりに取り組めます",
      intro: "こんにちは、ジェラルドです。",
      titleTop: "フルスタック",
      titleBottom: "エンジニア",
      description:
        "フロントエンドを主軸に持つフルスタックエンジニアとして、2020年11月から本番品質のデジタルプロダクトを開発しています。",
      workLinkLabel: "実績を見る",
      experienceLabel: "経験",
      yearsSuffix: "年",
      focusLabel: "主な専門領域",
      focusValue: "フロントエンド",
      modeLabel: "現在のモード:",
      modeValue: "意図を持って構築中",
    },
    about: {
      eyebrow: "自己紹介",
      titleTop: "経験としてのフルスタック。",
      titleBottom: "軸としてのフロントエンド。",
      paragraphs: [
        "2020年11月にプロフェッショナルとしてのキャリアを開始しました。スタック全体に関わる経験を通じて、プロダクトがどのように設計され、構築され、運用されるかを実践的に理解しています。",
        "現在の主な専門領域はフロントエンドです。アーキテクチャ、視覚的な完成度、パフォーマンス、ユーザー体験が交わる領域に強みがあります。",
      ],
      principles: [
        ["01", "明確に考える", "解決策を決める前に、まず課題を正しく理解します。"],
        ["02", "丁寧に作る", "細部まで意識し、保守しやすいコードを書きます。"],
        ["03", "学び続ける", "実践的な学習を通じて、変化に対応し続けます。"],
      ],
    },
    proof: {
      eyebrow: "実績",
      titleTop: "本番開発の経験。",
      titleBottom: "体系的な学習。",
      description:
        "本番システム、機密性の高いバックオフィス開発、重要なWebプロダクト、そしてDicodingでの体系的な学習を組み合わせた実績です。",
      openWebsite: "Webサイトを開く",
      confidentialWork: "機密プロジェクト",
      githubRepo: "GitHub repo",
      certificate: "Certificate",
      professional: [
        {
          label: "機密システム",
          title: "バックオフィスプラットフォーム",
          description:
            "複数の社内バックオフィスプロジェクトに携わり、信頼性、保守性、運用フローの明確さを重視して開発しました。",
          highlights: ["社内ツール", "業務フロー", "本番リリース"],
        },
        {
          label: "重要プロダクト",
          title: "M2U Web",
          description:
            "Maybank IndonesiaのインターネットバンキングWebプラットフォームに貢献しました。ユーザーが直接利用する金融プロダクトとして、安定性、使いやすさ、本番環境での信頼性が重要な領域です。",
          highlights: ["インターネットバンキング", "金融プラットフォーム", "本番環境での信頼性"],
        },
      ],
      credentials: [
        {
          title: "React 開発者ラーニングパス",
          provider: "Dicoding Indonesia",
          status: "完了",
          description:
            "Clean Code、Reduxによる状態管理、自動テスト、CI/CD、Reactエコシステムの実践的な選定に重点を置いたReact上級学習です。",
          topics: ["クリーンコード", "Redux", "テスト", "CI/CD", "React エコシステム"],
        },
        {
          title: "バックエンド JavaScript ラーニングパス",
          provider: "Dicoding Indonesia",
          status: "完了",
          description:
            "Clean Architecture、自動テスト、セキュリティ、スケーラビリティ、CI/CD、APIドキュメントに重点を置いたBackend JavaScript学習です。",
          topics: ["クリーンアーキテクチャ", "テスト", "セキュリティ", "スケーラビリティ", "API ドキュメント"],
        },
      ],
    },
    work: {
      eyebrow: "できること",
      title: "価値を生む領域。",
      description:
        "経験、技術的判断力、好奇心を活かして最も価値を出せる領域です。",
      projects: [
        {
          title: "フロントエンド体験",
          description:
            "プロダクトの目的、パフォーマンス、保守性のバランスを取りながら、洗練されたレスポンシブなUIを構築します。",
          tags: ["React", "Vue", "UI エンジニアリング"],
        },
        {
          title: "フルスタックシステム",
          description:
            "考え抜かれたフロントエンドと信頼性の高いバックエンドサービスを接続し、完成度の高いスケーラブルなアプリケーションを届けます。",
          tags: ["Node.js", "Spring Boot", "API"],
        },
        {
          title: "学習実験",
          description:
            "新しい技術を、焦点を絞ったプロトタイプ、技術調査、意図的な実験を通じて探求します。",
          tags: ["AI", "プロトタイプ", "リサーチ"],
        },
      ],
    },
    process: {
      eyebrow: "働き方",
      titleTop: "エンドツーエンドの理解。",
      titleBottom: "フロントエンドの精度。",
      paragraphs: [
        "フルスタックの背景により、API、バックエンドの制約、プロダクト全体のアーキテクチャを理解したうえでフロントエンドの判断ができます。",
        "アクセシブルで、パフォーマンスが高く、保守しやすく、実際に使う人にとって価値のあるインターフェースを作ることに集中しています。",
      ],
    },
    footer: {
      eyebrow: "アイデアがありますか？",
      titleTop: "形に",
      titleBottom: "しましょう",
      contact: "連絡先",
      credit: "意図を持って設計・開発",
    },
  },
  zh: {
    nav: {
      about: "关于我",
      proof: "项目成果",
      work: "我的专长",
      contact: "联系我",
      cta: "聊一聊",
      language: "语言",
    },
    hero: {
      location: "印度尼西亚，雅加达",
      availability: "期待打造有意义的产品",
      intro: "你好，我是杰拉尔多。",
      titleTop: "全栈",
      titleBottom: "工程师",
      description: "我是一名专注于前端的全栈工程师，自 2020 年 11 月起持续打造可投入生产的数字产品。",
      workLinkLabel: "了解我的工作",
      experienceLabel: "经验",
      yearsSuffix: "年",
      focusLabel: "核心方向",
      focusValue: "前端",
      modeLabel: "当前状态：",
      modeValue: "用心构建中",
    },
    about: {
      eyebrow: "关于我",
      titleTop: "全栈源于经验。",
      titleBottom: "前端出于直觉。",
      paragraphs: [
        "我在 2020 年 11 月开启职业生涯。跨越整个技术栈的经历，让我对产品从设计、开发到维护的完整过程有了务实的理解。",
        "前端工程始终是我的核心方向：架构、视觉细节、性能与用户体验在这里汇聚。",
      ],
      principles: [
        ["01", "清晰思考", "在投入解决方案前，先真正理解问题。"],
        ["02", "用心构建", "编写易于维护的代码，并关注每一处细节。"],
        ["03", "持续学习", "通过有意识的实践学习，始终保持适应力。"],
      ],
    },
    proof: {
      eyebrow: "项目成果",
      titleTop: "生产级项目。",
      titleBottom: "持续验证学习。",
      description: "这里汇集了生产系统、保密的后台项目、关键 Web 产品，以及体系化的 Dicoding 学习路径。",
      openWebsite: "打开网站",
      confidentialWork: "保密项目",
      githubRepo: "GitHub 仓库",
      certificate: "证书",
      professional: [
        {
          label: "保密系统",
          title: "后台管理平台",
          description: "参与多个内部后台项目，更关注可靠性、可维护性和清晰的运营流程，而非公开曝光。",
          highlights: ["内部工具", "运营流程", "生产交付"],
        },
        {
          label: "关键产品",
          title: "M2U Web",
          description: "参与 Maybank Indonesia 的互联网银行平台开发。这是一项面向用户的关键金融产品，对稳定性、易用性和生产可靠性有极高要求。",
          highlights: ["互联网银行", "金融平台", "生产可靠性"],
        },
      ],
      credentials: [
        {
          title: "React 开发者学习路径",
          provider: "Dicoding Indonesia",
          status: "已完成",
          description: "进阶 React 学习，涵盖 Clean Code、Redux 状态管理、自动化测试、CI/CD 与实用的生态系统选择。",
          topics: ["Clean Code", "Redux", "测试", "CI/CD", "React 生态"],
        },
        {
          title: "后端 JavaScript 学习路径",
          provider: "Dicoding Indonesia",
          status: "已完成",
          description: "后端 JavaScript 学习，涵盖整洁架构、自动化测试、安全性、可扩展性、CI/CD 与 API 文档。",
          topics: ["整洁架构", "测试", "安全性", "可扩展性", "API 文档"],
        },
      ],
    },
    work: {
      eyebrow: "我的专长",
      title: "创造价值的方式。",
      description: "经验、技术判断与好奇心结合的地方，正是我能够带来最大价值的地方。",
      projects: [
        {
          title: "前端体验",
          description: "构建精致、响应迅速的界面，在产品目标、性能与可维护代码之间取得平衡。",
          tags: ["React", "Vue", "UI 工程"],
        },
        {
          title: "全栈系统",
          description: "将周全的前端与可靠的后端服务连接起来，交付完整且可扩展的应用。",
          tags: ["Node.js", "Spring Boot", "API"],
        },
        {
          title: "学习实验",
          description: "通过聚焦的原型、技术研究和有目的的实验探索新技术。",
          tags: ["AI", "原型", "研究"],
        },
      ],
    },
    process: {
      eyebrow: "我的工作方式",
      titleTop: "端到端的理解。",
      titleBottom: "前端的精准。",
      paragraphs: [
        "全栈背景让我能够在理解 API、后端约束和整体产品架构的基础上，做出更清晰的前端决策。",
        "我专注于打造易访问、高性能、易维护，并真正为使用者带来价值的界面。",
      ],
    },
    footer: {
      eyebrow: "有想法吗？",
      titleTop: "让我们将它",
      titleBottom: "变为现实",
      contact: "联系我",
      credit: "用心设计与构建",
    },
  },
} as const;

export type HomeContent = (typeof homeContent)[LanguageCode];
