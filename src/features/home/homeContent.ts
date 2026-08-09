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
      cv: "Download CV",
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
    resume: {
      eyebrow: "Recruiter signal",
      title: "Recruiter snapshot.",
      description:
        "A quick view of the strongest signals for hiring conversations: production banking work, frontend ownership, full-stack context, and verified learning.",
      downloadLabel: "Download CV",
      contactLabel: "Send an email",
      highlights: [
        {
          title: "Production banking platform",
          description:
            "Contributed to M2U Web and internal banking platforms where reliability, maintainability, and delivery discipline matter.",
        },
        {
          title: "Frontend-led full-stack delivery",
          description:
            "Strongest in frontend engineering, with enough backend context to shape practical product and API decisions.",
        },
        {
          title: "Testing-minded growth",
          description:
            "Keeps sharpening through React, backend JavaScript, automated testing, CI/CD, and Storybook-oriented workflows.",
        },
      ],
    },
    fieldNotes: {
      eyebrow: "Field notes",
      title: "Production field notes.",
      description:
        "Short notes on how I approach opaque, high-stakes product work without exposing confidential details.",
      contextLabel: "Context",
      moveLabel: "Move",
      signalLabel: "Signal",
      notes: [
        {
          title: "Rescuing ambiguity before code",
          context:
            "Backoffice work often starts with scattered operational rules, edge cases, and handoffs.",
          move:
            "Map user flows, failure states, and API expectations before committing to the interface.",
          signal:
            "Less rework, clearer handoff, and UI behavior that matches real operations.",
        },
        {
          title: "Keeping banking UI reliable",
          context:
            "Financial products punish small inconsistencies, especially around state and recovery.",
          move:
            "Favor predictable states, guarded interactions, and regression-friendly component structure.",
          signal:
            "Stable experiences that are easier to maintain across production releases.",
        },
        {
          title: "Turning learning into delivery",
          context:
            "New tools only matter when they improve shipped work, not just the stack list.",
          move:
            "Use focused prototypes to validate patterns before they enter production code.",
          signal:
            "Learning compounds into cleaner implementation choices and better team conversations.",
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
      cv: "Unduh CV",
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
    resume: {
      eyebrow: "Sinyal untuk recruiter",
      title: "Ringkasan recruiter.",
      description:
        "Gambaran cepat tentang sinyal terkuat untuk proses hiring: pengalaman banking production, ownership frontend, konteks full-stack, dan pembelajaran tervalidasi.",
      downloadLabel: "Unduh CV",
      contactLabel: "Kirim email",
      highlights: [
        {
          title: "Platform banking production",
          description:
            "Berkontribusi di M2U Web dan platform internal banking yang menuntut reliability, maintainability, dan disiplin delivery.",
        },
        {
          title: "Frontend-led full-stack delivery",
          description:
            "Paling kuat di frontend engineering, dengan konteks backend yang cukup untuk mengambil keputusan produk dan API secara praktis.",
        },
        {
          title: "Growth dengan mindset testing",
          description:
            "Terus diasah lewat React, backend JavaScript, automated testing, CI/CD, dan workflow yang dekat dengan Storybook.",
        },
      ],
    },
    fieldNotes: {
      eyebrow: "Catatan produksi",
      title: "Catatan kerja produksi.",
      description:
        "Catatan singkat tentang cara saya menangani pekerjaan product yang kompleks dan sensitif tanpa membuka detail confidential.",
      contextLabel: "Konteks",
      moveLabel: "Langkah",
      signalLabel: "Sinyal",
      notes: [
        {
          title: "Merawat ambiguity sebelum ngoding",
          context:
            "Pekerjaan backoffice sering dimulai dari aturan operasional, edge case, dan handoff yang tersebar.",
          move:
            "Memetakan user flow, failure state, dan ekspektasi API sebelum mengunci bentuk interface.",
          signal:
            "Lebih sedikit rework, handoff lebih jelas, dan perilaku UI lebih dekat dengan operasi nyata.",
        },
        {
          title: "Menjaga UI banking tetap reliable",
          context:
            "Produk finansial tidak ramah terhadap inkonsistensi kecil, terutama di state dan recovery.",
          move:
            "Memilih state yang predictable, interaksi yang terlindungi, dan struktur komponen yang regression-friendly.",
          signal:
            "Experience yang stabil dan lebih mudah dirawat lintas production release.",
        },
        {
          title: "Mengubah belajar jadi delivery",
          context:
            "Tool baru hanya berguna kalau memperbaiki kualitas shipped work, bukan sekadar menambah daftar stack.",
          move:
            "Memakai prototype terarah untuk validasi pattern sebelum masuk ke production code.",
          signal:
            "Pembelajaran berubah jadi pilihan implementasi yang lebih bersih dan diskusi tim yang lebih tajam.",
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
      cv: "Download CV",
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
    resume: {
      eyebrow: "採用向けシグナル",
      title: "採用担当者向けサマリー。",
      description:
        "本番銀行システム、フロントエンドのオーナーシップ、フルスタックの文脈、検証された学習を短く確認できます。",
      downloadLabel: "Download CV",
      contactLabel: "メールを送る",
      highlights: [
        {
          title: "本番銀行プラットフォーム",
          description:
            "M2U Web と社内銀行プラットフォームに携わり、信頼性、保守性、デリバリー品質を重視して開発しました。",
        },
        {
          title: "フロントエンド主導のフルスタック開発",
          description:
            "主軸はフロントエンドでありながら、実践的なプロダクト判断とAPI判断に必要なバックエンド文脈も持っています。",
        },
        {
          title: "テスト志向の成長",
          description:
            "React、Backend JavaScript、自動テスト、CI/CD、Storybook を通じて継続的にスキルを磨いています。",
        },
      ],
    },
    fieldNotes: {
      eyebrow: "フィールドノート",
      title: "本番開発のフィールドノート。",
      description:
        "機密情報を公開せずに、複雑で重要度の高いプロダクト開発へどう向き合うかを短くまとめています。",
      contextLabel: "Context",
      moveLabel: "Move",
      signalLabel: "Signal",
      notes: [
        {
          title: "コードを書く前に曖昧さを整理する",
          context:
            "バックオフィス開発は、運用ルール、例外ケース、引き継ぎ情報が分散した状態から始まることがあります。",
          move:
            "UIを固める前に、ユーザーフロー、失敗状態、APIへの期待値を整理します。",
          signal:
            "手戻りを減らし、引き継ぎを明確にし、実際の運用に合うUI挙動へ近づけます。",
        },
        {
          title: "銀行UIの信頼性を保つ",
          context:
            "金融プロダクトでは、状態管理や復旧導線の小さな不一致が体験を大きく損ないます。",
          move:
            "予測しやすい状態、保護された操作、回帰テストしやすいコンポーネント構造を重視します。",
          signal:
            "本番リリースを重ねても安定し、保守しやすい体験につながります。",
        },
        {
          title: "学習をデリバリーへ変える",
          context:
            "新しいツールは、採用すること自体よりも、出荷する品質を上げる時に意味を持ちます。",
          move:
            "本番コードへ入れる前に、小さなプロトタイプでパターンを検証します。",
          signal:
            "学習がより良い実装判断とチーム内の具体的な議論につながります。",
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
      cv: "Download CV",
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
    resume: {
      eyebrow: "招聘信号",
      title: "招聘快速摘要。",
      description:
        "快速展示招聘沟通中最重要的信号：生产级银行项目、前端 ownership、全栈语境，以及经过验证的学习路径。",
      downloadLabel: "Download CV",
      contactLabel: "发送邮件",
      highlights: [
        {
          title: "生产级银行平台",
          description:
            "参与 M2U Web 和内部银行平台建设，重视可靠性、可维护性和交付纪律。",
        },
        {
          title: "以前端为主的全栈交付",
          description:
            "核心强项是前端工程，同时具备足够的后端语境，能做出实际的产品和 API 决策。",
        },
        {
          title: "测试导向的成长",
          description:
            "持续通过 React、Backend JavaScript、自动化测试、CI/CD 和 Storybook 工作流提升能力。",
        },
      ],
    },
    fieldNotes: {
      eyebrow: "现场笔记",
      title: "生产项目现场笔记。",
      description:
        "在不公开保密细节的前提下，简短展示我如何处理复杂且高要求的产品工作。",
      contextLabel: "Context",
      moveLabel: "Move",
      signalLabel: "Signal",
      notes: [
        {
          title: "写代码前先处理模糊性",
          context:
            "后台项目往往从分散的运营规则、边界情况和交接信息开始。",
          move:
            "在确定界面前，先梳理用户流程、失败状态和 API 预期。",
          signal:
            "减少返工，让交接更清晰，也让 UI 行为更贴近真实运营。",
        },
        {
          title: "保持银行 UI 的可靠性",
          context:
            "金融产品对细小的不一致非常敏感，尤其是状态和恢复路径。",
          move:
            "优先选择可预测的状态、受保护的交互，以及便于回归验证的组件结构。",
          signal:
            "形成更稳定、更容易随生产发布维护的体验。",
        },
        {
          title: "把学习转化为交付",
          context:
            "新工具只有在提升已交付工作的质量时，才真正有价值。",
          move:
            "在进入生产代码前，用聚焦的原型验证模式。",
          signal:
            "让学习沉淀为更清晰的实现选择和更有效的团队沟通。",
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
